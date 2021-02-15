import { GameAction } from 'src/models/game/GameAction';
import {Executable} from '../../block-command';

export class Right implements Executable{

  static label: string = 'Right';
  static id: string = btoa(Right.name);
  static asCode = 'right();'

  execute(grid, unit): GameAction {
    console.log('RIGHT')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Right.id;
  }

  getLabel(){
    return Right.label;
  }

  indentationLevel: number;

  getAsCode(): string {
    return Right.asCode;
  }


}

