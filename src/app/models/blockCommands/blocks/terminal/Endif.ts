import { TerminalBlock } from '../../block-command';

/**
 * TerminalBlock representing the end of an If block
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class EndIf implements TerminalBlock {

  static label: string = 'End if';
  static id: string = btoa(EndIf.name);
  terminate: number = null;
  indentationLevel: number;

  getId(): string {
    return EndIf.id;
  }

  getLabel(): string {
    return EndIf.label;
  }

  getAsCode(): string {
    return '}';
  }

}
