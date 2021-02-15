import { GameAction } from 'src/models/game/GameAction';
import {Executable} from '../../block-command';

export class Attack implements Executable{

  static label: string = 'Attack';
  static id: string = btoa(Attack.name);
  static asCode = 'attack();'

  execute(grid, unit): GameAction {
    console.log('ATTACK')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Attack.id;
  }

  getLabel(){
    return Attack.label;
  }

  indentationLevel: number;

  getAsCode(): string {
    return Attack.asCode;
  }

}

