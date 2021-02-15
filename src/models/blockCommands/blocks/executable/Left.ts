import { GameAction } from 'src/models/game/GameAction';
import { Executable } from '../../block-command';

/**
 * Executable representing a left movement
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class Left implements Executable {

  static label: string = 'Left';
  static id: string = btoa(Left.name);
  static asCode = 'left();';
  indentationLevel: number;

  execute(grid, unit): GameAction {
    console.log('LEFT')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Left.id;
  }

  getLabel(): string {
    return Left.label;
  }

  getAsCode(): string {
    return Left.asCode;
  }

}
