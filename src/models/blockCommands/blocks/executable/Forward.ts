import { GameAction } from 'src/models/game/GameAction';
import {Executable} from '../../block-command';

export class Forward implements Executable{

  static label: string = 'Forward';
  static id: string = btoa(Forward.name);
  static asCode = 'forward();'

  execute(grid, unit): GameAction {
    console.log('FORWARD')
    return new GameAction("None", null, null, false);
  }

  getId(): string {
    return Forward.id;
  }

  getLabel(){
    return Forward.label;
  }

  indentationLevel: number;

  getAsCode(): string {
    return Forward.asCode;
  }


}

