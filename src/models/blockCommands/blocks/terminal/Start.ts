import {TerminalBlock} from '../../block-command';

export class Start implements TerminalBlock{

  static label: string = 'When Start';
  static id: string = btoa(Start.name);
  terminate: number = null;
  indentationLevel: number;

  getId(): string {
    return Start.id;
  }

  getLabel(){

    return Start.label;

  }

  getAsCode(): string {
    return 'function startTurn(grid, unit){';
  }

}
