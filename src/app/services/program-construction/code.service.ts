import { Injectable } from '@angular/core';
import { BlockCommand, ConditionalBlock, Executable, Predicate } from 'src/app/models/blockCommands/block-command';
import { Else } from 'src/app/models/blockCommands/blocks/conditional/Else';
import { ElseIf } from 'src/app/models/blockCommands/blocks/conditional/ElseIf';
import { If } from 'src/app/models/blockCommands/blocks/conditional/If';
import { EmptyPredicate } from 'src/app/models/blockCommands/blocks/predicate/EmptyPredicate';
import { End } from 'src/app/models/blockCommands/blocks/terminal/End';
import { Start } from 'src/app/models/blockCommands/blocks/terminal/Start';
import { GameAction } from 'src/app/models/game/GameAction';
import { BlockService } from './block.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for compiling and validating code
 */
export class CodeService {

  constructor(private blockService: BlockService) { }

  /**
   * Compiles and validates code into function array
   * @param commands The Array of commands to compile
   */
  compileToExecutableCode(commands: Array<BlockCommand>) {
    let actions: Array<Function> = [];

    for (let i = 0; i < commands.length; i++) {

      if (this.blockService.isExecutable(commands[i])) {

        actions.push((<Executable>commands[i]).execute);

      } else if (commands[i].getLabel() === If.label) {

        let condition = this.createConditionalFunction(i, commands, actions);
        i = condition[0];
        actions.push(condition[1]);

      } else if (commands[i].getLabel() === ElseIf.label) {

        throw new Error('Else If without If');

      } else if (this.blockService.isTerminal(commands[i])) {

        if (!(commands[i].getLabel() === Start.label || commands[i].getLabel() === End.label)) {
          throw new Error('Added terminal block without a sequence to terminate');
        }

      }

    }
    return actions;
  }

  /**
   * Validates code to check if code is valid
   * @param commands Array of Code to compile
   */
  validateCode(commands: Array<BlockCommand>) {
    // TODO -> use this array of strings to check that blocks are properly closed
    let serializedCode = this.serializeBlocks(commands);

    for (let command of commands) {

      if (this.blockService.isConditional(command)) {
        if (command.getId() === EmptyPredicate.id) {
          throw new Error('Compilation Error: Cannot keep predicate empty');
        }
      }

    }
  }

  /**
   * Serializes Code to string array for storage
   * @param commands Code to Serialize
   */
  serializeBlocks(commands: Array<BlockCommand>): Array<string> {
    let repr: Array<string> = [];

    for (let command of commands) {

      if (!this.blockService.isConditional(command)) {
        repr.push(String(command.getId()));
      } else {
        repr.push(String(command.getId() + '_'
          + command.condition.getId()));
      }

    }
    return repr;
  }

  /**
   * Deserializes code into a Block Command Array
   * @param repr Code string array to deserialize
   */
  deserializeToBlocks(repr: Array<string>): Array<BlockCommand> {
    let commands: Array<BlockCommand> = [];

    for (let rep of repr) {

      if (rep.includes('_')) {

        let ids = rep.split('_');
        let conditional: ConditionalBlock = <ConditionalBlock>this.blockService.getById(ids[0]);
        conditional.condition = <Predicate>this.blockService.getById(ids[1]);
        commands.push(conditional);

      } else {
        commands.push(this.blockService.getById(rep));
      }

    }
    return commands;
  }

  /**
   * Creates ConditionalBlock object
   * @param i location of conditional block in code
   * @param commands code to place
   * @param actions TODO: DOCUMENT
   */
  createConditionalFunction(i, commands: Array<BlockCommand>, actions) {

    let condition = (<ConditionalBlock>commands[i]).condition;
    let terminal_blocks = (<ConditionalBlock>commands[i]).terminal_blocks;
    let elseIfs = [];
    let elseActions = [];
    i++;

    // holds the actions to be executed if the evaluation method returns true
    let conditional_actions: Array<(grid, unit) => GameAction> = [];

    while (!terminal_blocks.includes(commands[i].getLabel())) {

      if (commands[i].getLabel() === End.label) {
        throw new Error('Blocks not closed properly');
      }

      if (commands[i].getLabel() === If.label) {

        let inner_condition = this.createConditionalFunction(i, commands, actions);
        i = inner_condition[0];
        conditional_actions.push(inner_condition[1]);
        i++;

      } else if (commands[i].getLabel() === ElseIf.label) {

        let next = this.parseElseIfOrElse(i, commands, actions);
        elseIfs.push([next[1], next[2]])
        i = next[0];

      } else if (commands[i].getLabel() === Else.label) {

        let next = this.parseElseIfOrElse(i, commands, actions);
        elseActions = next[2];
        i = next[0];

      } else {

        conditional_actions.push((<Executable>commands[i]).execute);
        i++;

      }
    } 
    /*
    Append to the actions array a new function that will execute all the functions in the conditional_actions array
    if the given evaluation function returns true. Otherwise it will look through the else ifs to see if any of
    those conditions are matching, otherwise it goes to the else.
     */
    return [i, (grid, unit) => {
      if (condition.evaluation(grid, unit)) {

        for (let action of conditional_actions) {
          action(grid, unit);
        }

      } else {

        let i = 0;
        while (i < elseIfs.length) {
          if (elseIfs[i][0].evaluation(grid, unit)) {

            for (let action of elseIfs[i][1]) {
              action(grid, unit);
            }
            break;

          }
          i++;
        }

        if (i === elseIfs.length) {
          for (let action of elseActions) {
            action(grid, unit);
          }
        }

      }
    }];
  }

  /**
   * Parses ElseIf or Else statement into a conditional and its actions
   * @param i the index location of of the statement
   * @param commands the code to compare against
   * @param actions TODO DOCUMENTATION
   */
  parseElseIfOrElse(i, commands: Array<BlockCommand>, actions) {
    let condition = null;

    if (commands[i].getLabel() === ElseIf.label) {
      condition = (<ConditionalBlock>commands[i]).condition;
    }

    let conditional_actions: Array<(grid, unit) => GameAction> = [];
    let terminal_blocks = (<ConditionalBlock>commands[i]).terminal_blocks;
    i++;

    while (!(terminal_blocks.includes(commands[i].getLabel()))) {

      if (commands[i].getLabel() === End.label) {
        throw new Error('Blocks not closed properly');
      }

      if (commands[i].getLabel() === If.label) {
        let inner = this.createConditionalFunction(i, commands, actions);
        i = inner[0];
        conditional_actions.push(inner[1])
      } else {
        conditional_actions.push((<Executable>commands[i]).execute);
        i++;
      }

    }

    return [i, condition, conditional_actions];
  }
}