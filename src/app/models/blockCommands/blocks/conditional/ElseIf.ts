import { ConditionalBlock, Predicate } from '../../block-command';
import { EmptyPredicate } from '../predicate/EmptyPredicate';
import { EndElseIf } from '../terminal/EndElseIf';
import { Else } from './Else';

/**
 * ConditionalBlock representing an Else-If statement
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class ElseIf implements ConditionalBlock {

  static id: string = btoa(ElseIf.name);
  static label: string = 'Else if';
  static asCode = (predicate: Predicate) => `} else if(${predicate.getAsCode()}) {`;

  condition: Predicate = new EmptyPredicate();
  terminal_blocks: Array<string> = [ElseIf.label, EndElseIf.label, Else.label];
  indentationLevel: number;

  getId(): string {
    return ElseIf.id;
  }

  getLabel(): string {
    return ElseIf.label;
  }

  getAsCode(): string {
    return ElseIf.asCode(this.condition);
  }

}
