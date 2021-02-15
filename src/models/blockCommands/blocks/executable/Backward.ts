import { GameAction } from 'src/models/game/GameAction';
import { Executable } from '../../block-command';

/**
 * Executable representing a backward movement
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class Backward implements Executable {

  static label: string = 'Backward';
  static id: string = btoa(Backward.name);
  static asCode = 'backward();';
  indentationLevel: number;

  execute(grid, unit): GameAction {
    console.log('BACKWARD')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Backward.id;
  }

  getLabel(): string {
    return Backward.label;
  }

  getAsCode(): string {
    return Backward.asCode;
  }

}
