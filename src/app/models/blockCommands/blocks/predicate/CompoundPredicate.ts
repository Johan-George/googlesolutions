import {Predicate} from '../../block-command';

/**
 * Predicate used to store complex conditions involving and + or of other predicates
 */
export class CompoundPredicate implements Predicate{

  conjunction: string;
  indentationLevel: number;
  negate: boolean;
  static id: string =  btoa(CompoundPredicate.name);

  evaluation(grid, unit): boolean {
    return false;
  }

  getAsCode(): string {
    return '';
  }

  getId(): string {
    return CompoundPredicate.id;
  }

  getLabel(): string {
    return '';
  }


}
