import { Injectable } from '@angular/core';
import { Stack } from 'src/app/dataStructures/Stack';
import { BlockCommand, ConditionalBlock, Executable } from 'src/app/models/blockCommands/block-command';
import { Else } from 'src/app/models/blockCommands/blocks/conditional/Else';
import { ElseIf } from 'src/app/models/blockCommands/blocks/conditional/ElseIf';
import { If } from 'src/app/models/blockCommands/blocks/conditional/If';
import { CodeType } from 'src/app/models/database/DatabaseData';
import { GameAction } from 'src/app/models/game/GameAction';
import { Unit } from 'src/app/models/game/Unit';
import { BlockService } from '../../program-construction/block.service';
import { LevelDataInterfaceService } from '../levelDataInterface/level-data-interface.service';

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
        this.grid[u.location.y][u.location.x] = u;
      }

      for (var x = 0; x < this.team2units.length; x++) {
        var u = this.team2units[x];
        this.grid[u.location.y][u.location.x] = u;
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

        console.log(this.team1units.length);
        console.log(this.team1units.length);

        if (this.team1units.length == 0) {
          //return new GameAction("GameEnd2", null, null, false);
          successFunc(new GameAction("GameEnd2", null, null, false));
        } else if (this.team2units.length == 0) {
          //return new GameAction(""GameEnd1"", null, null, false);
          successFunc(new GameAction("GameEnd1", null, null, false));
        }

        var unit = ((this.isTeam1Active) ? this.team1units : this.team2units)[this.unitIndex]
        console.log(this.isTeam1Active);
        console.log("test 0");
        console.log(unit.codeType);
        console.log(unit.team);
        console.log(unit.location.x);

        if (unit.codeType == CodeType.BLOCK) {

          console.log("test 1");

          //it is a codeblock task
          var currentCodeBlock: BlockCommand = null;

          do {
            unit = ((this.isTeam1Active) ? this.team1units : this.team2units)[this.unitIndex]
            currentCodeBlock = unit.activecode[this.codeIndex];
          } while (this.evalCodeBlock(currentCodeBlock, unit))

          console.log("test 2");

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
        } else if(CodeType.FILE) {
          console.log("test w");

          this.workerRunning = unit.activecode as Worker;
          console.log("test 2");

          this.workerRunning.postMessage([this.grid, unit]);
          console.log("test 1");
          
          var self = this

          this.workerRunning.onmessage = function(event) {
            self.workerRunning = null;

            var curTeam: Unit[] = (self.isTeam1Active) ? self.team1units : self.team2units;

            self.unitIndex++;
            self.codeIndex = 0;
            if (curTeam.length <= self.unitIndex) {
              //no more units to run through switch sides
              self.unitIndex = 0;
              self.isTeam1Active = !self.isTeam1Active;
            }

            successFunc(event.data);
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

    console.log(cmd.getLabel);

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

