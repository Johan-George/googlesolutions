import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';
import {Unit} from '../../../game/units/Unit';

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

  execute(grid: Array<Array<Unit>>, unit: Unit): GameAction {
    // let location = unit.location;
    // let range = unit.attackRange;
    // for(let i = location.x - range; i <= location.x + range; i++){
    //   for(let j = location.y - range; i <= location.y + range; j++){
    //
    //
    //
    //   }
    // }
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

