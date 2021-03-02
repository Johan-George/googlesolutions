import {Predicate} from '../../block-command';

/**
 * Predicate used to store complex conditions involving and + or of other predicates
 */
export class CompoundPredicate implements Predicate{

  conjunction: string;
  indentationLevel: number;
  negate: boolean;

  evaluation(grid, unit): boolean {
    return false;
  }

  getAsCode(): string {
    return '';
  }

  getId(): string {
    return '';
  }

  getLabel(): string {
    return '';
  }


}
