import { ConditionalBlock, Predicate } from '../../block-command';
import { EndElse } from '../terminal/EndElse';

/**
 * ConditionalBlock representing an Else statement
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class Else implements ConditionalBlock {

  static id: string = btoa(Else.name);
  static label: string = 'Else';
  static asCode: string = 'else {';

  condition: Predicate;
  terminal_blocks: Array<string> = [EndElse.label];
  indentationLevel: number;

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
