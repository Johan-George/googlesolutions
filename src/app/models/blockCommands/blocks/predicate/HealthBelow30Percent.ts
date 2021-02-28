import { Predicate } from '../../block-command';

/**
 * Predicate representing Health below 30% condition
 * condition checks the unit's health if below 30%
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class HealthBelow30Percent implements Predicate {

  static label: string = 'Health Less Than 30 Percent';
  static id: string = btoa(HealthBelow30Percent.name);
  static asCode = 'healthLessThan30Percent(me)'
  indentationLevel: number;

  evaluation(grid, unit): boolean {
    return ((unit.health / unit.maxHealth) * 100) < 30;
  }

  getId(): string {
    return HealthBelow30Percent.id;
  }

  getLabel(): string {
    return HealthBelow30Percent.label;
  }

  getAsCode(): string {
    return HealthBelow30Percent.asCode;
  }


}
