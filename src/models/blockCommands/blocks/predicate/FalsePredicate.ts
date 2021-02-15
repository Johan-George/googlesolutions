import { Predicate } from '../../block-command';

/**
 * Predicate representing the False condition
 * This condition is always false
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class FalsePredicate implements Predicate {

  static id: string = btoa(FalsePredicate.name);
  static label: string = 'No Condition Selected';
  static asCode = 'false';
  indentationLevel: number;

  evaluation(grid, unit): boolean {
    return false;
  }

  getId(): string {
    return FalsePredicate.id;
  }

  getLabel(): string {
    return FalsePredicate.label;
  }

  getAsCode(): string {
    return FalsePredicate.asCode;
  }

}
