import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';
import {Wait} from './Wait';
import {GridParserService} from '../../../../services/game/grid-parser.service';

/**
 * Executable representing a forward movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class East implements Executable {

  static label: string = 'Go east';
  static id: string = btoa(East.name);
  static asCode = 'east();';
  indentationLevel: number;

  constructor() {}

  execute(grid, unit): GameAction {
    let newLocation = {x:unit.location.x + 1, y:unit.location.y};
    if(GridParserService.isInBounds(newLocation, grid) && !GridParserService.isUnitOccupied(newLocation, grid)){

      grid[unit.location.x][unit.location.y] = null;
      unit.location = newLocation;
      unit.doWalkAnimation();
      return new GameAction(East.name, unit, null, false);

    }else{

      return new GameAction(Wait.name, unit, null, false);

    }
  }

  getId(): string {
    return East.id;
  }

  getLabel(): string {
    return East.label;
  }

  getAsCode(): string {
    return East.asCode;
  }


}

