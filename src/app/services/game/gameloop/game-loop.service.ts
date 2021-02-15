import { Injectable } from '@angular/core';
import { Stack } from 'src/app/dataStructures/Stack';
import { BlockCommand, ConditionalBlock, Executable } from 'src/app/models/blockCommands/block-command';
import { If } from 'src/app/models/blockCommands/blocks/conditional/If';
import { EndIf } from 'src/app/models/blockCommands/blocks/terminal/Endif';
import { GameAction } from 'src/app/models/game/GameAction';
import { Unit } from 'src/app/models/game/Unit';
import { LevelDataInterfaceService } from '../levelDataInterface/level-data-interface.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Service that runs the internal gameloop for the game
 */
export class GameLoopServiceService {

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

  constructor(private LevelInterface: LevelDataInterfaceService) { }

  /**
   * Called before the start of game
   * prepares the service for runnning a single game
   */
  prepLoop() {

    try {
      this.isTeam1Active = true;
      this.unitIndex = 0;
      this.codeIndex = 0;
      this.lastAction = null;

      var data = this.LevelInterface.getGameInfo();

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
  stepGame(): GameAction {

    try {

      if (this.team1units.length == 0) {
        return new GameAction("GameEnd2", null, null, false);
      } else if (this.team2units.length == 0) {
        return new GameAction("GameEnd1", null, null, false);
      }

      var currentCodeBlock: BlockCommand = null;

      do {
        var unit = ((this.isTeam1Active) ? this.team1units : this.team2units)[this.unitIndex]
        currentCodeBlock = unit.activecode[this.codeIndex];
      } while (this.evalCodeBlock(currentCodeBlock, unit))

      var last = this.lastAction;

      if (last == null) {
        last = new GameAction("NoEvent", null, null, false);
      }

      this.lastAction = null;

      return last;
      
    } catch(error) {
      last = null;
      return new GameAction("Error", null, null, false); 
    }
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
    if (this.isConditional(cmd)) {
      this.currentConditions.push(new ConditionalHold(cmd as ConditionalBlock, this.codeIndex));

      //check conditioning
      if ((cmd as ConditionalBlock).condition.evaluation(this.grid, unit)) {
        this.currentConditions.peek().preCondition = true;
        this.codeIndex++;
        return true;

      } else {
        this.currentConditions.peek().preCondition = false;
        //Find endblock
        do {
          this.codeIndex++;
        } while (!(unit.activecode[this.codeIndex] instanceof EndIf));
        return true;

      }
      //conditionalEnd check
    } else if (cmd instanceof EndIf) {
      var lastHold: ConditionalHold = this.currentConditions.peek();

      finalReturn = true;
      if (lastHold.conditional instanceof If) {
        this.currentConditions.pop();
      }

      //It must be an action
    } else {
      this.lastAction = (cmd as Executable).execute(this.grid, unit);
      finalReturn = false;
    }

    this.codeIndex++;
    //check range in code array
    if (unit.activecode.length <= this.codeIndex) {
      //no more code, next unit
      var curTeam: Unit[] = (this.isTeam1Active) ? this.team1units : this.team2units;

      this.unitIndex++;
      this.codeIndex = 0;
      if (curTeam.length <= this.unitIndex) {
        //no more units to run through switch sides
        this.unitIndex = 0;
        this.isTeam1Active = !this.isTeam1Active;
      }

      this.currentConditions.clear();
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

  /**
   * Returns true if the block is an instance of ConditionalBlock
   * @param command the BlockCommand to check
   */
  private isConditional(command: BlockCommand): command is ConditionalBlock {
    /*
     the condition field is unique to the ConditionalBlock interface so if it is defined then we know it is a
     Conditional Block
     */
    return (<ConditionalBlock>command).condition !== undefined;
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

