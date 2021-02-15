import {TerminalBlock} from '../../block-command';

export class End implements TerminalBlock{

  static label: string = 'End';
  static id: string = btoa(End.name);
  terminate: number = null;
  indentationLevel: number;

  getId(): string {
    return End.id;
  }

  getLabel(){
    return End.label;
  }

  getAsCode(): string {
    return '}';
  }

}
