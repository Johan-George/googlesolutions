import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';

/**
 * Executable representing a right movement
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class Right implements Executable {

  static label: string = 'Right';
  static id: string = btoa(Right.name);
  static asCode = 'right();';
  indentationLevel: number;

  execute(grid, unit): GameAction {
    console.log('RIGHT')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Right.id;
  }

  getLabel(): string {
    return Right.label;
  }

  getAsCode(): string {
    return Right.asCode;
  }

}