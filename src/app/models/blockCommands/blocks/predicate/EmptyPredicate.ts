import { Predicate } from '../../block-command';

/**
 * Predicate representing No condition in the conditional
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class EmptyPredicate implements Predicate {

  static id: string = btoa(EmptyPredicate.name);
  static label: string = 'No Condition Selected';
  indentationLevel: number;
  conjunction: string = '';
  negate: boolean = false;


  evaluation(grid, unit): boolean {
    return false;
  }

  getId(): string {
    return EmptyPredicate.id;
  }

  getLabel(): string {
    return EmptyPredicate.label;
  }

  getAsCode(): string {
    return '';
  }
}
