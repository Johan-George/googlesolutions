import {Predicate} from '../../block-command';
import {GridParserService} from '../../../../services/game/grid-parser.service';

export class SouthAvailable implements Predicate{

  static id: string = btoa(SouthAvailable.name);
  static label: string = 'South Available';
  static asCode: string = 'locationAvailable(grid, {x: me.location.x, y: me.location.y + 1})';
  conjunction: string;
  indentationLevel: number;
  negate: boolean;

  evaluation(grid, unit): boolean {
    let south = {x: unit.location.x, y: unit.location.y + 1};
    return GridParserService.isInBounds(south, grid)
      && !GridParserService.isUnitOccupied(south, grid);
  }

  getAsCode(): string {
    return SouthAvailable.asCode;
  }

  getId(): string {
    return SouthAvailable.id;
  }

  getLabel(): string {
    return SouthAvailable.label;
  }

}
