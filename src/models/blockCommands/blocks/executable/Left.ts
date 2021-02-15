import { GameAction } from 'src/models/game/GameAction';
import {Executable} from '../../block-command';

export class Left implements Executable{

  static label: string = 'Left';
  static id: string = btoa(Left.name);
  static asCode = 'left();'

  execute(grid, unit): GameAction {
    console.log('LEFT')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Left.id;
  }

  getLabel(){
    return Left.label;
  }

  indentationLevel: number;

  getAsCode(): string {
    return Left.asCode;
  }


}
