import { GameAction } from 'src/models/game/GameAction';
import {Executable} from '../../block-command';

export class Backward implements Executable{

  static label: string = 'Backward';
  static id: string = btoa(Backward.name);
  static asCode = 'backward();'

  execute(grid, unit): GameAction {
    console.log('BACKWARD')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Backward.id;
  }

  getLabel(){
    return Backward.label;
  }

  indentationLevel: number;

  getAsCode(): string {
    return Backward.asCode;
  }


}
