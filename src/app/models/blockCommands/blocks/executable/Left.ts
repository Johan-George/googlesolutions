import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';
import {GridParserService} from '../../../../services/game/grid-parser.service';
import {Wait} from './Wait';

/**
 * Executable representing a left movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class Left implements Executable {

  static label: string = 'Left';
  static id: string = btoa(Left.name);
  static asCode = 'left();';
  indentationLevel: number;

  constructor() {}


  execute(grid, unit): GameAction {
    let newLocation = {x:unit.location.x, y:unit.location.y - 1}
    if (GridParserService.isInBounds(newLocation, grid) && !GridParserService.isUnitOccupied(newLocation, grid)){

      grid[unit.location.x][unit.location.y] = null;
      unit.location = newLocation;
      unit.doWalkAnimation();
      return new GameAction(Left.name, unit, null, false);

    }else{

      return new GameAction(Wait.name, unit, null, false);

    }
  }

  getId(): string {
    return Left.id;
  }

  getLabel(): string {
    return Left.label;
  }

  getAsCode(): string {
    return Left.asCode;
  }

}
