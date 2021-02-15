import { GameAction } from "../game/GameAction";


export interface BlockCommand{

  getId: () => string
  getLabel: () => string
  indentationLevel: number
  getAsCode: () => string

}

export interface Predicate extends BlockCommand{

  evaluation: (grid, unit) => boolean

}

export interface Executable extends BlockCommand{

  execute: (grid, unit) => GameAction

}

export interface ConditionalBlock extends BlockCommand{

  condition: Predicate;
  terminal_blocks: Array<string>;

}

export interface TerminalBlock extends BlockCommand{

  /*
   This is just to check if a BlockCommand is a terminal block by checking if this is not undefined. Otherwise,
   it has not significance
   */
  terminate: number;

}
