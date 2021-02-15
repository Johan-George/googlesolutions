import {ConditionalBlock, Predicate} from '../../block-command';
import {EmptyPredicate} from '../predicate/EmptyPredicate';
import {EndElseIf} from '../terminal/EndElseIf';
import {Else} from './Else';

export class ElseIf implements ConditionalBlock{

  condition: Predicate = new EmptyPredicate();
  static id: string = btoa(ElseIf.name);
  static label: string = 'Else if'
  static asCode = (predicate: Predicate) => `else if(${predicate.getAsCode()}){`

  getId(): string {
    return ElseIf.id;
  }

  getLabel(): string {
    return ElseIf.label;
  }

  terminal_blocks: Array<string> = [ElseIf.label, EndElseIf.label, Else.label];
  indentationLevel: number;

  getAsCode(): string {
    return ElseIf.asCode(this.condition);
  }


}
