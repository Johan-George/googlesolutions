import {Predicate} from '../../block-command';

export class EmptyPredicate implements Predicate{

  static id: string = btoa(EmptyPredicate.name);
  static label: string = 'No Condition Selected';
  indentationLevel: number;


  evaluation(grid, unit): boolean {
    return false;
  }

  getId(){

    return EmptyPredicate.id;

  }

  getLabel(){
    return EmptyPredicate.label;
  }

  getAsCode(): string {
    return '';
  }


}
