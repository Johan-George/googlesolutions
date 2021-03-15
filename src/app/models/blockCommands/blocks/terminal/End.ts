import { TerminalBlock } from '../../block-command';

/**
 * TerminalBlock representing the end of the code
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class End implements TerminalBlock {

  static label: string = 'End Turn';
  static id: string = btoa(End.name);
  terminate: number = null;
  indentationLevel: number = 0;

  getId(): string {
    return End.id;
  }

  getLabel(): string {
    return End.label;
  }

  getAsCode(): string {
    return '}';
  }

}
