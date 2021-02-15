import {TerminalBlock} from '../../block-command';

export class EndElse implements TerminalBlock{

  static label:string = 'End Else'
  static id:string = btoa(EndElse.name);
  terminate: number = null;
  indentationLevel: number;

  getId(): string {
    return EndElse.id;
  }

  getLabel(): string {
    return EndElse.label;
  }

  getAsCode(): string {
    return '}';
  }

}
