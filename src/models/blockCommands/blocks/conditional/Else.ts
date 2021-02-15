import {ConditionalBlock, Predicate} from '../../block-command';
import {EndElse} from '../terminal/EndElse';

export class Else implements ConditionalBlock{

  static id: string = btoa(Else.name);
  static label: string = 'Else';
  static asCode: string = 'else {';

  getId(): string {
    return Else.id;
  }

  getLabel(): string {
    return Else.label;
  }

  condition: Predicate;
  terminal_blocks: Array<string> = [EndElse.label];
  indentationLevel: number;

  getAsCode(): string {
    return Else.asCode;
  }

}
