import { TerminalBlock } from '../../block-command';

/**
 * TerminalBlock representing the end of an Else block
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class EndElse implements TerminalBlock {

  static label: string = 'End Else'
  static id: string = btoa(EndElse.name);
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
