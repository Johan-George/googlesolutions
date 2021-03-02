import { GameAction } from "../game/GameAction";

/**
 * Interface representing any Code-Block within a program when
 * constructing a program
 */
export interface BlockCommand{

  /**
   * Method to implement representing the Id of the block when stored
   * on the database
   */
  getId: () => string

  /**
   * Method to implement representing the label found on the block when
   * in Code-block construction
   */
  getLabel: () => string

  /**
   * value representing the indentation of the code-block in construction
   */
  indentationLevel: number

  /**
   * the string representation of the javascript code this Block represents
   * for display on construction
   */
  getAsCode: () => string

}

/**
 * BlockCommand representing of a condition within a BlockCommand conditional
 */
export interface Predicate extends BlockCommand{

  /**
   * Method to implement for evaluating the condition
   */
  evaluation: (grid, unit) => boolean
  /**
   * Whether or not to negate the value from the evaluation function
   */
  negate: boolean;
  /**
   * How this predicate conjuncts with other predicates (and/or). & for and, | for or
   */
  conjunction: string;
}

/**
 * BlockCommand representing a command/function to execute
 */
export interface Executable extends BlockCommand{

  /**
   * method to implement for executing the command/function
   */
  execute: (grid, unit) => GameAction

}

/**
 * BlockCommand representing a conditional statement (e.g If, while)
 */
export interface ConditionalBlock extends BlockCommand{

  /**
   * the Predicate object representing the condition of the conditional statement
   */
  conditions: Array<Predicate>;

  /**
   * The final condition once you combine all the predicates with ands + ors
   */
  condition: Predicate;

  /**
   * The Array of TerminalBlock objects representing the sections within the conditional
   */
  terminal_blocks: Array<string>;

}

export interface TerminalBlock extends BlockCommand{

  /*
   This is just to check if a BlockCommand is a terminal block by checking if this is not undefined. Otherwise,
   it has not significance
   */
  terminate: number;

}
