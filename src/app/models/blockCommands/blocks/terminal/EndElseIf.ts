import { TerminalBlock } from '../../block-command';

/**
 * TerminalBlock representing the end of an ElseIf Block
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class EndElseIf implements TerminalBlock {

  static label: string = 'End Else If'
  static id: string = btoa(EndElseIf.name);
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
