import {ConditionalBlock, Predicate} from '../../block-command';
import {EndIf} from '../terminal/Endif';
import {EmptyPredicate} from '../predicate/EmptyPredicate';
import {EndElse} from '../terminal/EndElse';
import {EndElseIf} from '../terminal/EndElseIf';

export class If implements ConditionalBlock {

  condition: Predicate = new EmptyPredicate();
  static label: string = 'If';
  terminal_blocks: Array<string> = [EndIf.label, EndElse.label, EndElseIf.label];
  static asCode = (predicate: Predicate) => `if(${predicate.getAsCode()}){`;
  static id: string = btoa(If.name);

  getId(): string {
    return If.id;
  }

  getLabel(){
    return If.label;
  }

  indentationLevel: number;

  getAsCode(): string {
    return If.asCode(this.condition);
  }

}
