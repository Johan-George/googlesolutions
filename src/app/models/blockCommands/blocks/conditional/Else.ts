import {ConditionalBlock, Predicate, TerminalBlock} from '../../block-command';
import { EndElse } from '../terminal/EndElse';
import {EmptyPredicate} from '../predicate/EmptyPredicate';

/**
 * ConditionalBlock representing an Else statement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class Else implements ConditionalBlock, TerminalBlock {

  static id: string = btoa(Else.name);
  static label: string = 'Else';
  static asCode: string = '} else {';

  condition: Predicate = new EmptyPredicate();
  terminal_blocks: Array<string> = [EndElse.label];
  indentationLevel: number;
  terminate: number = null;

  getId(): string {
    return Else.id;
  }

  getLabel(): string {
    return Else.label;
  }

  getAsCode(): string {
    return Else.asCode;
  }

}
