import { BlockCommand } from "../blockCommands/block-command";

/**
 * Object that represents a Unit on the grid
 */
export class Unit {

  /**
   * The Id number on the grid of the unit
   */
  id: number = -1;

  /**
   * The amount of Action Energy the unit has left
   */
  energy: number = 3;

  /**
   * The team that the unit belongs to
   */
  team: number = -1;

  /**
   * the location of the unit on the grid
   */
  location: { x: number, y: number } = { x: 0, y: 0 };
  
  /**
   * The code the that unit can run
   */
  activecode: BlockCommand[] = [];

  /**
   * function to allow the unit to move
   */
  doMove() {}

}
