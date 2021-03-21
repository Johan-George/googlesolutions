import {Predicate} from '../../block-command';
import {GridParserService} from '../../../../services/game/grid-parser.service';

export class NorthAvailable implements Predicate{

  static id: string = btoa(NorthAvailable.name);
  static label: string = 'North Available';
  static asCode: string = 'locationAvailable(grid, {x: me.location.x, y: me.location.y - 1})';
  conjunction: string = '';
  indentationLevel: number;
  negate: boolean = false;

  evaluation(grid, unit): boolean {
    let north = {x: unit.location.x, y: unit.location.y - 1};
    return GridParserService.isInBounds(north, grid)
      && !GridParserService.isUnitOccupied(north, grid);
  }

  getAsCode(): string {
    return NorthAvailable.asCode;
  }

  getId(): string {
    return NorthAvailable.id;
  }

  getLabel(): string {
    return NorthAvailable.label;
  }


}
