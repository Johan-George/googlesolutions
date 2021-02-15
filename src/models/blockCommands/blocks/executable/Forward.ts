import { GameAction } from 'src/models/game/GameAction';
import { Executable } from '../../block-command';

/**
 * Executable representing a forward movement
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class Forward implements Executable {

  static label: string = 'Forward';
  static id: string = btoa(Forward.name);
  static asCode = 'forward();';
  indentationLevel: number;

  execute(grid, unit): GameAction {
    console.log('FORWARD')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Forward.id;
  }

  getLabel(): string {
    return Forward.label;
  }

  getAsCode(): string {
    return Forward.asCode;
  }


}

