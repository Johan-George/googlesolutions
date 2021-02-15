import { GameAction } from "src/models/game/GameAction";
import { Executable } from "../../block-command";

/**
 * Executable for testing
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class TextAction2 implements Executable {

  static label: string = 'Action2';
  static id: string = btoa(TextAction2.name);
  static asCode = 'textAction2();';
  indentationLevel: number;

  execute(grid, unit): GameAction {
    return new GameAction(unit.id + " Action2", unit, null, false);
  }

  getId(): string {
    return TextAction2.id;
  }

  getLabel(): string {
    return TextAction2.label;
  }

  getAsCode(): string {
    return TextAction2.asCode;
  }

}
