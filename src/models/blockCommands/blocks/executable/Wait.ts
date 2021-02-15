import {Executable} from '../../block-command';
import { GameAction } from 'src/models/game/GameAction';

export class Wait implements Executable {

  static label: string = 'Wait';
  static id: string = btoa(Wait.name);
  static asCode = 'wait();'
  indentationLevel: number;

  execute(grid, unit): GameAction {
    console.log('WAIT')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Wait.id;
  }

  getLabel(){
    return Wait.label;
  }

  getAsCode(): string {
    return Wait.asCode;
  }



}
