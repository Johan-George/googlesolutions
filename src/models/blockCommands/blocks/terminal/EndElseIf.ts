import {TerminalBlock} from '../../block-command';

export class EndElseIf implements TerminalBlock{

  static label = 'End Else If'
  static id:string = btoa(EndElseIf.name);
  terminate: number = null;
  indentationLevel: number;

  getId(): string {
    return EndElseIf.id;
  }

  getLabel(): string {
    return EndElseIf.label;
  }

  getAsCode(): string {
    return '}';
  }

}
