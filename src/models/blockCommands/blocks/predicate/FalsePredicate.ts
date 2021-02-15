import {Predicate} from '../../block-command';

export class FalsePredicate implements Predicate{

  static id: string = btoa(FalsePredicate.name);
  static label: string = 'No Condition Selected';
  static asCode = 'false';
  indentationLevel: number;

  evaluation(grid, unit): boolean {
    return false;
  }

  getId(){

    return FalsePredicate.id;

  }

  getLabel(){
    return FalsePredicate.label;
  }

  getAsCode(): string {
    return FalsePredicate.asCode;
  }


}
