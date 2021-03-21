import {Predicate} from '../../block-command';
import {GridParserService} from '../../../../services/game/grid-parser.service';

export class WestAvailable implements Predicate{

  static id: string = btoa(WestAvailable.name);
  static label: string = 'West Available';
  static asCode: string = 'locationAvailable(grid, {x: me.location.x - 1, y: me.location.y})';
  conjunction: string = '';
  indentationLevel: number;
  negate: boolean = false;

  evaluation(grid, unit): boolean {
    let west = {x: unit.location.x - 1, y: unit.location.y};
    return GridParserService.isInBounds(west, grid)
      && !GridParserService.isUnitOccupied(west, grid);
  }

  getAsCode(): string {
    return WestAvailable.asCode;
  }

  getId(): string {
    return WestAvailable.id;
  }

  getLabel(): string {
    return WestAvailable.label;
  }


}
