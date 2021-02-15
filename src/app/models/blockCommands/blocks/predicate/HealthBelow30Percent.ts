import { Predicate } from '../../block-command';

/**
 * Predicate representing Health below 30% condition
 * condition checks the unit's health if below 30%
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class HealthBelow30Percent implements Predicate {

  static label: string = 'Health Below 30%';
  static id: string = btoa(HealthBelow30Percent.name);
  static asCode = 'healthBelow30Percent()'
  indentationLevel: number;

  evaluation(grid, unit): boolean {
    return true;
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
