import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';
import {GridParserService} from '../../../../services/game/grid-parser.service';
import {Wait} from './Wait';

/**
 * Executable representing a left movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class North implements Executable {

  static label: string = 'Go north';
  static id: string = btoa(North.name);
  static asCode = 'north();';
  indentationLevel: number;

  constructor() {}


  execute(grid, unit): GameAction {
    let newLocation = {x:unit.location.x, y:unit.location.y - 1}
    if (GridParserService.isInBounds(newLocation, grid) && !GridParserService.isUnitOccupied(newLocation, grid)){

      grid[unit.location.x][unit.location.y] = null;
      unit.location = newLocation;
      unit.doWalkAnimation();
      return new GameAction(North.name, unit, null, false);

    }else{

      return new GameAction(Wait.name, unit, null, false);

    }
  }

  getId(): string {
    return North.id;
  }

  getLabel(): string {
    return North.label;
  }

  getAsCode(): string {
    return North.asCode;
  }

}
