import {Predicate} from '../../block-command';
import {GridParserService} from '../../../../services/game/grid-parser.service';

export class EastAvailable implements Predicate{

  static id: string = btoa(EastAvailable.name);
  static label: string = 'East Available';
  static asCode: string = 'locationAvailable(grid, {x: me.location.x + 1, y: me.location.y})';
  conjunction: string = '';
  indentationLevel: number;
  negate: boolean = false;

  evaluation(grid, unit): boolean {
    let east = {x: unit.location.x + 1, y: unit.location.y};
    return GridParserService.isInBounds(east, grid)
      && !GridParserService.isUnitOccupied(east, grid);
  }

  getAsCode(): string {
    return EastAvailable.asCode;
  }

  getId(): string {
    return EastAvailable.id;
  }

  getLabel(): string {
    return EastAvailable.label;
  }


}
