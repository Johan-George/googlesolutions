import {Predicate} from '../../block-command';

export class HealthBelow30Percent implements Predicate{

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

  getLabel(){
    return HealthBelow30Percent.label;
  }

  getAsCode(): string {
    return HealthBelow30Percent.asCode;
  }


}
