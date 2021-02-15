import {Predicate} from '../../block-command';

export class TruePredicate implements Predicate{

  static id: string = btoa(TruePredicate.name);
  static label: string = 'No Condition Selected';
  static asCode = 'true';
  indentationLevel: number;

  evaluation(grid, unit): boolean {
    return true;
  }

  getId(){

    return TruePredicate.id;

  }

  getLabel(){
    return TruePredicate.label;
  }


  getAsCode(): string {
    return TruePredicate.asCode;
  }


}
