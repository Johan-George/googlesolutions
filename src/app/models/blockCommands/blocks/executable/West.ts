import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';
import {Wait} from './Wait';
import {GridParserService} from '../../../../services/game/grid-parser.service';

/**
 * Executable representing a backward movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class West implements Executable {

  static label: string = 'Go west';
  static id: string = btoa(West.name);
  static asCode = 'west();';
  indentationLevel: number;

  constructor() {}

  execute(grid, unit): GameAction {
    let newLocation = {x:unit.location.x - 1, y:unit.location.y};
    if(GridParserService.isInBounds(newLocation, grid) && !GridParserService.isUnitOccupied(newLocation, grid)){

      grid[unit.location.x][unit.location.y] = null;
      unit.location = newLocation;
      unit.doWalkAnimation();
      return new GameAction(West.name, unit, null, false);

    }else{

      return new GameAction(Wait.name, unit, null, false);

    }
  }

  getId(): string {
    return West.id;
  }

  getLabel(): string {
    return West.label;
  }

  getAsCode(): string {
    return West.asCode;
  }

}
