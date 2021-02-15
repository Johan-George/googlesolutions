import {Predicate} from '../../block-command';

export class EnemyNear implements Predicate{

  static label: string = 'Enemy Near';
  static id: string = btoa(EnemyNear.name);
  static asCode = 'enemyNear()'
  indentationLevel: number;

  evaluation(grid, unit): boolean {
    return false;
  }

  getId(): string {
    return EnemyNear.id;
  }
  getLabel(){
    return EnemyNear.label;
  }

  getAsCode(): string {
    return EnemyNear.asCode;
  }

}
