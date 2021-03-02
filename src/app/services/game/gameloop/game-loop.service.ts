import { Injectable } from '@angular/core';
import { Stack } from 'src/app/dataStructures/Stack';
import { BlockCommand, ConditionalBlock, Executable } from 'src/app/models/blockCommands/block-command';
import { Else } from 'src/app/models/blockCommands/blocks/conditional/Else';
import { ElseIf } from 'src/app/models/blockCommands/blocks/conditional/ElseIf';
import { If } from 'src/app/models/blockCommands/blocks/conditional/If';
import { CodeType, ProgramData } from 'src/app/models/database/DatabaseData';
import { GameAction } from 'src/app/models/game/GameAction';
import { Unit } from 'src/app/models/game/units/Unit';
import { BlockService } from '../../program-construction/block.service';
import { LevelDataInterfaceService } from '../levelDataInterface/level-data-interface.service';
import {Wait} from '../../../models/blockCommands/blocks/executable/Wait';
import {UnitReadOnly} from '../../../models/game/units/UnitReadOnly';

@Injectable({
  providedIn: 'root'
})
/**
 * Service that runs the internal gameloop for the game
 */
export class GameLoopServiceService {

  WORKER_TIMEOUT_TIME = 5000;

  /**
   * 2d grid representation of the map
   */
  grid: Unit[][]; //Map representation of grid
  /**
   * Array of units found in team 1
   */
  team1units: Unit[];
  /**
   * Array of units found in team 2
   */
  team2units: Unit[];

  /**
   * Boolean value on if team 1's turn is active
   * true if team 1's turn, false otherwise
   */
  isTeam1Active: boolean;
  /**
   * The index of the unit in the team array currently commiting actions
   */
  unitIndex: number;//index in team array units of unit currently active
  /**
   * the index of the code the unit is currently running
   */
  codeIndex: number;//index in codeblock array of currently running unit

  /**
   * A stack of the conditional hierarchy of the currently running code
   */
  currentConditions: Stack<ConditionalHold>;

  /**
   * the previous gameAction object that was returned
   * null if no action is stored
   */
  lastAction: GameAction;

  /**
   * Data stored for game run
   */
  gameData;

  workerRunning: Worker;


  constructor(private LevelInterface: LevelDataInterfaceService, private blockServ: BlockService) { }

  /**
   * Must be called before loop is prepped
   */
  loadData(levelid: string, programid: string): Promise<void> {
    return new Promise((resolutionFunc, rejectionFunc) => {
      this.LevelInterface.getGameInfo(levelid, programid).then(result => {
        this.gameData = result;

        resolutionFunc();
      });
    })
  }

  loadTestData(programData: ProgramData): Promise<void> {
    return new Promise((resolutionFunc, rejectionFunc) => {
      this.LevelInterface.getGameInfoTesting(programData).then(result => {
        this.gameData = result;

        resolutionFunc();
      });
    })
  }

  /**
   * Called before the start of game
   * prepares the service for runnning a single game
   */
  prepLoop() {

    try {
      var data = this.gameData;

      this.isTeam1Active = true;
      this.unitIndex = 0;
      this.codeIndex = 0;
      this.lastAction = null;

      this.team1units = data.team1Units;
      this.team2units = data.team2Units;

      this.grid = this.create2DArray(data.griddimensions.x, data.griddimensions.y);

      this.currentConditions = new Stack();

      for (var x = 0; x < this.team1units.length; x++) {
        var u = this.team1units[x];
        this.grid[u.location.x][u.location.y] = u;
      }

      for (var x = 0; x < this.team2units.length; x++) {
        var u = this.team2units[x];
        this.grid[u.location.x][u.location.y] = u;
      }

    } catch (error) {
      console.log("Failed: " + error);
      return false;
    }

    return true;
  }

  /**
   * runs through 1 action in the game via interpreting game commands
   */
  stepGame(): Promise<any> {
    var self = this;
    return Promise.race([this.baseStepPromise(), new Promise<GameAction>((resolve, reject) => {
      setTimeout(function(){
        reject("Code Took too long");

        if(self.workerRunning != null) {
          self.workerRunning.terminate();
        }
      }, this.WORKER_TIMEOUT_TIME);
    })]);
  }

  baseStepPromise(): Promise<GameAction> {

    return new Promise((successFunc, rejectFunc) => {

      try {

        // Return at the end of each of these to not execute the code after. We know we're done.
        if (this.team1units.length === 0) {
          //return new GameAction("GameEnd2", null, null, false);
          successFunc(new GameAction("GameEnd2", null, null, false));
          return;
        } else if (this.team2units.length === 0) {
          //return new GameAction(""GameEnd1"", null, null, false);
          successFunc(new GameAction("GameEnd1", null, null, false));
          return;
        }

        var unit = ((this.isTeam1Active) ? this.team1units : this.team2units)[this.unitIndex]

        if (unit.codeType == CodeType.BLOCK) {

          //it is a codeblock task
          var currentCodeBlock: BlockCommand = null;

          do {
            unit = ((this.isTeam1Active) ? this.team1units : this.team2units)[this.unitIndex]
            currentCodeBlock = unit.activecode[this.codeIndex];
          } while (this.evalCodeBlock(currentCodeBlock, unit))

          //next unit
          var curTeam: Unit[] = (this.isTeam1Active) ? this.team1units : this.team2units;

          this.unitIndex++;
          this.codeIndex = 0;
          if (curTeam.length <= this.unitIndex) {
            //no more units to run through switch sides
            this.unitIndex = 0;
            this.isTeam1Active = !this.isTeam1Active;
          }

          this.currentConditions.clear();

          //check action integrity
          var last = this.lastAction;

          if (last == null) {
            last = new GameAction("NoEvent", null, null, false);
          }

          this.lastAction = null;

          successFunc(last);
        } else if(unit.codeType === CodeType.FILE) {

          this.workerRunning = unit.activecode as Worker;

          this.workerRunning.postMessage(JSON.stringify({grid: this.convertGridToReadOnly(this.grid), unit: new UnitReadOnly(unit)}));

          var self = this
          var messageSent = false;

          this.workerRunning.onmessage = function(event) {

            if(!messageSent){
              self.workerRunning = null;

              var curTeam: Unit[] = (self.isTeam1Active) ? self.team1units : self.team2units;

              self.unitIndex++;
              self.codeIndex = 0;
              if (curTeam.length <= self.unitIndex) {
                //no more units to run through switch sides
                self.unitIndex = 0;
                self.isTeam1Active = !self.isTeam1Active;
              }
              /*
              Note the the convertWorkerMessageToAction never returns null. Instead if something goes
              wrong it will return a default wait action.
               */
              self.lastAction = self.convertWorkerMessageToAction(event.data, self.grid, unit);
              successFunc(self.lastAction);
            }
            messageSent = true;
          }

          this.workerRunning.onerror = function(event) {
            self.workerRunning = null;

            var curTeam: Unit[] = (self.isTeam1Active) ? self.team1units : self.team2units;

            self.unitIndex++;
            self.codeIndex = 0;
            if (curTeam.length <= self.unitIndex) {
              //no more units to run through switch sides
              self.unitIndex = 0;
              self.isTeam1Active = !self.isTeam1Active;
            }

            rejectFunc("Written Code has encountered an error");
          }

        } else {
          //none type
          rejectFunc("Unexpected Nonetype code");
        }

      } catch (error) {
        last = null;
        //return new GameAction("Error", null, null, false);
        console.log(error);
        successFunc(new GameAction("Error", null, null, false));
      }
    });
  }

  /**
   * Evaluates the current codeblock for action or conditional logic
   * Returns true if this method should be called another time
   * @param cmd the block command to evaluate
   * @param unit the unit commiting the action
   */
  //TODO COMPLETE FOR ALL CONDITIONALS
  private evalCodeBlock(cmd: BlockCommand, unit: Unit): boolean {
    var finalReturn = false;

    //conditional check
    if (this.blockServ.isConditional(cmd)) {

      if (cmd instanceof If) {
        return this.handleIfStatement(cmd, unit);
      } else if (cmd instanceof ElseIf) {

        if (this.currentConditions.peek().preCondition) {
          this.seekToEndIf(unit);
        } else {
          this.currentConditions.pop();

          return this.handleIfStatement(cmd, unit);
        }

      } else if (cmd instanceof Else) {

        if (this.currentConditions.peek().preCondition) {
          this.seekToEndIf(unit);
        } else {
          finalReturn = true;
        }
      }

      //conditionalEnd check
    } else if (this.blockServ.isTerminal(cmd)) {
      finalReturn = true;
      this.currentConditions.pop();

      //It must be an action
    } else {
      this.lastAction = (cmd as Executable).execute(this.grid, unit);
      finalReturn = false;
    }

    this.codeIndex++;
    //check range in code array
    if (unit.activecode.length <= this.codeIndex) {
      //no more code, next unit
      // var curTeam: Unit[] = (this.isTeam1Active) ? this.team1units : this.team2units;

      // this.unitIndex++;
      // this.codeIndex = 0;
      // if (curTeam.length <= this.unitIndex) {
      //   //no more units to run through switch sides
      //   this.unitIndex = 0;
      //   this.isTeam1Active = !this.isTeam1Active;
      // }

      // this.currentConditions.clear();
      return false;
    } else {
      return finalReturn;
    }

  }

  private convertGridToReadOnly(grid: Unit[][]){

    let newGrid = [];
    for (let row of grid){
      let newRow = [];
      for(let el of row){

        if(el === null){
          newRow.push(el);
          continue;
        }
        newRow.push(new UnitReadOnly(el));

      }
      newGrid.push(newRow);
    }
    return newGrid;

  }

  /**
   * Creates a null filled 2d array of units for the grid at specified size
   * @param x size in x direction
   * @param y size in y direction
   */
  private create2DArray(x: number, y: number): Unit[][] {
    var arr: Unit[][] = [];

    for (var row = 0; row < y; row++) {
      arr[row] = [];
      for (var col = 0; col < x; col++) {
        arr[row][col] = null;
      }
    }
    return arr;
  }

  private handleIfStatement(cmd: BlockCommand, unit: Unit): boolean {
    this.currentConditions.push(new ConditionalHold(cmd as ConditionalBlock, this.codeIndex));

    //check conditioning
    if ((cmd as ConditionalBlock).condition.evaluation(this.grid, unit)) {
      this.currentConditions.peek().preCondition = true;
      this.codeIndex++;
      return true;

    } else {
      this.currentConditions.peek().preCondition = false;

      //Find endblock
      this.seekToEndIf(unit);

      /*while (!(unit.activecode[this.codeIndex] instanceof EndIf));*/
      return true;
    }
  }

  private seekToEndIf(unit: Unit) {
    var conditionCount = 1;
    var curBlock: BlockCommand;

    do {
      this.codeIndex++;
      curBlock = unit.activecode[this.codeIndex]

      if (curBlock instanceof If) {
        conditionCount++;
      } else if (this.blockServ.isTerminal(curBlock)) {
        conditionCount--;
      }
    } while (!(this.blockServ.isTerminal(curBlock) || curBlock instanceof Else || curBlock instanceof ElseIf) || !(conditionCount <= 0));
  }

  /**
   * Takes the data returned from the web worker and converts it to a game action object. If unable to
   * parse game action then we make the unit just wait.
   * @param data the data from the web worker
   * @param grid the map the user is playing
   * @param unit the unit the user is controlling
   * @private
   */
  private convertWorkerMessageToAction(data, grid, unit): GameAction{

    let action = data.result;
    try {
      let executable = this.blockServ.getById(btoa(action));
      if(!(this.blockServ.isExecutable(executable))){
        throw new Error();
      }else{
        return executable.execute(grid, unit);
      }

    }catch (err){

      return new Wait().execute(grid, unit);

    }
  }

  deleteUnit(unit: Unit){

    let team = unit.team === 1 ? this.team1units : this.team2units;
    for(let i = 0; i < team.length; i++){

      if(team[i].id === unit.id){

        team.splice(i);

      }

    }

  }

}

/**
 * Object representing a conditional group that the code has intercepted
 */
class ConditionalHold {
  conditional: ConditionalBlock;
  conditionCodeIndex: number;
  preCondition: boolean = false;
  elseMet: boolean = false;

  constructor(cond: ConditionalBlock, ind: number) {
    this.conditional = cond;
    this.conditionCodeIndex = ind;
  }
}

