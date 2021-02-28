import { TerminalBlock } from '../../block-command';

/**
 * TerminalBlock representing the start of the code
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class Start implements TerminalBlock {

  static label: string = 'When Start';
  static id: string = btoa(Start.name);
  terminate: number = null;
  indentationLevel: number = 0;

  getId(): string {
    return Start.id;
  }

  getLabel(): string {
    return Start.label;
  }

  getAsCode(): string {
    return 'this.onmessage = function (turnEvent){';
  }

}
