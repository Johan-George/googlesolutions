import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';
import {GridParserService} from '../../../../services/game/grid-parser.service';
import {Wait} from './Wait';

/**
 * Executable representing a right movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class Right implements Executable {

  static label: string = 'Right';
  static id: string = btoa(Right.name);
  static asCode = 'right();';
  indentationLevel: number;

  constructor() {}

  execute(grid, unit): GameAction {
    let newLocation = {x:unit.location.x, y:unit.location.y + 1}
    if (GridParserService.isInBounds(newLocation, grid) && !GridParserService.isUnitOccupied(newLocation, grid)){

      unit.location = newLocation;
      unit.doWalkAnimation();
      return new GameAction(Right.name, unit, null, false);

    }else{

      return new GameAction(Wait.name, unit, null, false);

    }
  }

  getId(): string {
    return Right.id;
  }

  getLabel(): string {
    return Right.label;
  }

  getAsCode(): string {
    return Right.asCode;
  }

}
