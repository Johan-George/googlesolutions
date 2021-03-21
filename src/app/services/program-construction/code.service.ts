import {Injectable} from '@angular/core';
import {BlockCommand, ConditionalBlock, Executable, Predicate} from 'src/app/models/blockCommands/block-command';
import {Else} from 'src/app/models/blockCommands/blocks/conditional/Else';
import {ElseIf} from 'src/app/models/blockCommands/blocks/conditional/ElseIf';
import {If} from 'src/app/models/blockCommands/blocks/conditional/If';
import {EmptyPredicate} from 'src/app/models/blockCommands/blocks/predicate/EmptyPredicate';
import {End} from 'src/app/models/blockCommands/blocks/terminal/End';
import {Start} from 'src/app/models/blockCommands/blocks/terminal/Start';
import {GameAction} from 'src/app/models/game/GameAction';
import {BlockService} from './block.service';
import {CompoundPredicate} from '../../models/blockCommands/blocks/predicate/CompoundPredicate';
import {EndElseIf} from '../../models/blockCommands/blocks/terminal/EndElseIf';
import {EndElse} from '../../models/blockCommands/blocks/terminal/EndElse';

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
    let executable_count = 0;

    for (let i = 0; i < commands.length; i++) {

      if (this.blockService.isExecutable(commands[i])) {

        actions.push((<Executable>commands[i]).execute);
        executable_count += 1;

      } else if (commands[i].getLabel() === If.label) {

        let condition = this.createConditionalFunction(i, commands, executable_count);
        i = condition[0];
        actions.push(condition[1]);

      } else if (commands[i].getLabel() === ElseIf.label) {

        throw new Error(CodeErrorFormatters.ELSE_IF_WITHOUT_IF(i + 1));

      } else if (this.blockService.isTerminal(commands[i])) {

        if (!(commands[i].getLabel() === Start.label || commands[i].getLabel() === End.label)) {
          if(commands[i].getLabel() === Else.label){

            throw new Error(CodeErrorFormatters.ELSE_WITHOUT_IF(i + 1));

          }else{
            throw new Error(CodeErrorFormatters.ADDED_TERMINAL_WITHOUT_SEQUENCE(i + 1));
          }
        }

      }

      if(executable_count > 1){
        throw new Error(CodeErrorFormatters.ONLY_ONE_ACTION());
      }

    }
    return actions;
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
        if((command as ConditionalBlock).condition.getId() !== CompoundPredicate.id){
          repr.push(String(command.getId() + '_'
            + command.condition.getId()));
        }else{
          let conditional = (command as ConditionalBlock);
          let serialized = command.getId() + '_' + (conditional.conditions[0].negate ? '!' : '') + conditional.conditions[0].getId();
          for(let i = 1; i < conditional.conditions.length; i++){
            let condition = conditional.conditions[i];
            serialized += (condition.conjunction + (condition.negate ? '!' : '') + condition.getId());
          }
          repr.push(serialized);
        }
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
    console.log('HELLO');
    for (let rep of repr) {

      if (rep.includes('_')) {
        debugger;
        let ids = rep.split('_');
        let conditional: ConditionalBlock = <ConditionalBlock>this.blockService.getById(ids[0]);
        // Make the list empty because it starts off with an empty predicate
        conditional.conditions = [];
        if(ids[1].includes('&') || ids[1].includes('|')){

          let start = -1;
          let complexCondition = ids[1];
          let nextCondition = 0;
          while(nextCondition !== -1){

            let nextAnd = complexCondition.indexOf('&', start + 1);
            let nextOr = complexCondition.indexOf('|', start + 1);
            if(nextOr !== -1){
              if(nextAnd < nextOr && nextAnd !== -1){
                nextCondition = nextAnd;
              }else{
                nextCondition = nextOr;
              }
            }else if(nextAnd !== -1){
              nextCondition = nextAnd;
            }else{
              nextCondition = -1;
            }

            let conjunction = start !== -1 ? complexCondition[start] : '';
            let id = complexCondition.slice(start + 1, nextCondition !== -1 ? nextCondition: complexCondition.length);
            let negate = false;
            start = nextCondition;
            if(id.charAt(0) === '!'){
              negate = true;
              id = id.slice(1, id.length);
            }
            let condition = this.blockService.getById(id);
            (condition as Predicate).negate = negate;
            (condition as Predicate).conjunction = conjunction;
            conditional.conditions.push(condition as Predicate);

          }

          commands.push(conditional);

        }else{
          conditional.conditions.push(<Predicate>this.blockService.getById(ids[1]));
          commands.push(conditional);
        }
        if(conditional.getId() !== Else.id){
          this.compileConditions(conditional, 0);
        }

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
   * @param executable_count the amount of executables seen in the global scope of the code
   */
  createConditionalFunction(i, commands: Array<BlockCommand>, executable_count) {

    this.compileConditions(<ConditionalBlock>commands[i], i);
    let condition = (<ConditionalBlock>commands[i]).condition;
    let global_executables = executable_count;
    let local_executables = 0;
    let start = i;
    let foundElse = false;
    // if(condition.getLabel() === EmptyPredicate.label){
    //   throw new Error('An if block is missing a condition');
    // }

    let terminal_blocks = (<ConditionalBlock>commands[i]).terminal_blocks;
    let elseIfs = [];
    let elseActions = [];
    i++;

    // holds the actions to be executed if the evaluation method returns true
    let conditional_actions: Array<(grid, unit) => GameAction> = [];

    while (!terminal_blocks.includes(commands[i].getLabel())) {

      if (commands[i].getLabel() === End.label) {
        throw new Error(CodeErrorFormatters.CONDITIONAL_NOT_CLOSED(start + 1));
      }

      if (commands[i].getLabel() === If.label) {

        let inner_condition = this.createConditionalFunction(i, commands, local_executables + global_executables);
        i = inner_condition[0];
        conditional_actions.push(inner_condition[1]);
        i++;

      } else if (commands[i].getLabel() === ElseIf.label) {
        this.compileConditions((<ConditionalBlock>commands[i]), i);
        let next = this.parseElseIfOrElse(i, commands, global_executables);
        elseIfs.push([next[1], next[2]]);
        i = next[0];

      } else if (commands[i].getLabel() === Else.label) {

        let next = this.parseElseIfOrElse(i, commands, global_executables);
        elseActions = next[2];
        i = next[0];
        foundElse = true;

      } else {

        conditional_actions.push((<Executable>commands[i]).execute);
        i++;
        local_executables++;

      }
      if(global_executables + local_executables > 1){

        throw new Error(CodeErrorFormatters.ONLY_ONE_ACTION());

      }
    }
    if(elseIfs.length === 0 && commands[i].getLabel() === EndElseIf.label){
      throw new Error(CodeErrorFormatters.CONDITIONAL_NOT_CLOSED(i + 1));
    }else if(!foundElse && commands[i].getLabel() === EndElse.label){
      throw new Error(CodeErrorFormatters.CONDITIONAL_NOT_CLOSED(i + 1));
    }
    /*
    Append to the actions array a new function that will execute all the functions in the conditional_actions array
    if the given evaluation function returns true. Otherwise it will look through the else ifs to see if any of
    those conditions are matching, otherwise it goes to the else.
     */
    return [i, (grid, unit) => {
      if (condition.evaluation(grid, unit)) {


        return conditional_actions[0](grid, unit);


      } else {

        let i = 0;
        while (i < elseIfs.length) {
          if (elseIfs[i][0].evaluation(grid, unit)) {

            return elseIfs[i][1][0](grid, unit);

          }
          i++;
        }

        if (i === elseIfs.length && elseActions.length !== 0) {
          return elseActions[0](grid, unit);
        }

      }
    }];
  }

  /**
   * Parses ElseIf or Else statement into a conditional and its actions
   * @param i the index location of of the statement
   * @param commands the code to compare against
   * @param executable_count the amount of executable blocks seen in the global scope of the code
   */
  parseElseIfOrElse(i, commands: Array<BlockCommand>, executable_count) {
    let condition = null;
    let global_executables = executable_count;
    let local_executables = 0;
    let start = i;

    if (commands[i].getLabel() === ElseIf.label) {
      condition = (<ConditionalBlock>commands[i]).condition;
    }

    let conditional_actions: Array<(grid, unit) => GameAction> = [];
    let terminal_blocks = (<ConditionalBlock>commands[i]).terminal_blocks;
    i++;
    while (!(terminal_blocks.includes(commands[i].getLabel()))) {

      if (commands[i].getLabel() === End.label) {
        throw new Error(CodeErrorFormatters.CONDITIONAL_NOT_CLOSED(start + 1));
      }

      if (commands[i].getLabel() === If.label) {
        let inner = this.createConditionalFunction(i, commands, local_executables + global_executables);
        i = inner[0];
        conditional_actions.push(inner[1])
      } else {
        conditional_actions.push((<Executable>commands[i]).execute);
        i++;
        local_executables++;
      }

    }

    if(local_executables + global_executables > 1){

      throw new Error(CodeErrorFormatters.ONLY_ONE_ACTION());

    }

    return [i, condition, conditional_actions];
  }

  compileConditions(conditional: ConditionalBlock, blockIndex){

    for(let i = 0; i < conditional.conditions.length; i++){
      let condition = conditional.conditions[i];
      if(condition.getLabel() === EmptyPredicate.label){
        throw new Error(CodeErrorFormatters.MISSING_CONDITIONS(blockIndex + 1));
      }
    }

    conditional.condition = this.convertToSingleCondition(conditional.conditions,0, blockIndex);

  }

  /**
   * Converts the conditions of a complex conditional statement into a single predicate.
   * @param conditions The predicates used for a complex conditional statement
   * @param index The index to start iterating from
   */
  convertToSingleCondition(conditions: Array<Predicate>, index:number=0, blockLocation): Predicate{
    //debugger;
    if(conditions.length === 1){
      return conditions[0];
    }
    let evaluations = [conditions[index]];
    let i = index + 1;
    while(i < conditions.length && conditions[i].conjunction === '&'){

      evaluations.push(conditions[i]);
      i++;

    }
    console.log(evaluations);
    let condition = (grid, unit) => {

      for(let evaluation of evaluations){

        if(evaluation.negate){
          if(evaluation.evaluation(grid, unit)){
            return false;
          }
        }else{
          if(!evaluation.evaluation(grid, unit)){
            return false;
          }
        }
      }
      return true;

    };
    if(i < conditions.length){

      if(conditions[i].conjunction !== '|'){

        throw new Error(CodeErrorFormatters.NO_CONJUNCTION_SPECIFIED(blockLocation + 1));

      }else{

        // If I don't do this there will be infinite recursion because it will think I'm trying to make a recursive call inside
        let cond = condition;

        condition = (grid, unit) => {
          return cond(grid, unit) || this.convertToSingleCondition(conditions, i, blockLocation).evaluation(grid, unit);
        }

      }

    }

    let result = new CompoundPredicate();
    result.evaluation = condition;

    return result;

  }

}

class CodeErrorFormatters{

  static ELSE_WITHOUT_IF = function(index){

    return `Else without If at block ${index}`;

  }

  static MISSING_CONDITIONS = function(index){

    return `Conditional Block is missing a condition at block ${index}`;

  }

  static ONLY_ONE_ACTION = function(){

    return 'Only one action allowed per turn';

  }

  static CONDITIONAL_NOT_CLOSED = function(index){

    return `Conditional not closed properly for block ${index}`;

  }

  static ELSE_IF_WITHOUT_IF = function(index){

    return `Else if without if at block ${index}`;

  }

  static ADDED_TERMINAL_WITHOUT_SEQUENCE = function(index){

    return `Added terminal block without sequence to terminate at block ${index}`;

  }

  static SOMETHING_WENT_WRONG = function(){

    return 'Something probably went wrong on our end! Please send a bug report.';

  }

  static NO_CONJUNCTION_SPECIFIED = function(index){
    return `AND or OR not specified for a conditional block at block ${index}`;
  }

}
