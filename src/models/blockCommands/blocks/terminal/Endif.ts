import {TerminalBlock} from '../../block-command';

export class EndIf implements TerminalBlock{

  static label: string = 'End if';
  static id: string = btoa(EndIf.name);
  terminate: number = null;
  indentationLevel: number;

  getId(): string {
    return EndIf.id;
  }

  getLabel(){
    return EndIf.label;
  }

  getAsCode(): string {
    return '}';
  }

}
