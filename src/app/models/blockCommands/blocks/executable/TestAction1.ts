import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';

/**
 * Executable for testing
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class TextAction1 implements Executable {

  static label: string = 'Action1';
  static id: string = btoa(TextAction1.name);
  static asCode = 'textAction1();';
  indentationLevel: number;

  execute(grid, unit): GameAction {
    return new GameAction(unit.id + " Action1", unit, null, false);
  }

  getId(): string {
    return TextAction1.id;
  }

  getLabel(): string {
    return TextAction1.label;
  }

  getAsCode(): string {
    return TextAction1.asCode;
  }

}
