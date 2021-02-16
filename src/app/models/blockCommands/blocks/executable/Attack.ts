import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';

/**
 * Executable representing an attack
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class Attack implements Executable {

  static label: string = 'Attack';
  static id: string = btoa(Attack.name);
  static asCode = 'attack();';
  indentationLevel: number;

  execute(grid, unit): GameAction {
    console.log('ATTACK')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Attack.id;
  }

  getLabel() {
    return Attack.label;
  }

  getAsCode(): string {
    return Attack.asCode;
  }

}

