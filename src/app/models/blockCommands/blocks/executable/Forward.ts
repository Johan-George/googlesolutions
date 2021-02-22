import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';
import {Wait} from './Wait';
import {GridParserService} from '../../../../services/game/grid-parser.service';

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

  constructor() {}

  execute(grid, unit): GameAction {
    let newLocation;
    // facing right
    if(unit.sprite.scaleX > 0){
      newLocation = {x:unit.location.x + 1, y:unit.location.y}
    }
    // facing left
    else{
      newLocation = {x:unit.location.x - 1, y:unit.location.y}
    }
    if(GridParserService.isInBounds(newLocation, grid) && !GridParserService.isUnitOccupied(newLocation, grid)){

      grid[unit.location.x][unit.location.y] = null;
      unit.location = newLocation;
      unit.doWalkAnimation();
      return new GameAction(Forward.name, unit, null, false);

    }else{

      return new GameAction(Wait.name, unit, null, false);

    }
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

