import { Predicate } from '../../block-command';

/**
 * Predicate representing The EnemyNear Condition
 * Condition checks if there is an enemy near the unit
 * See block-command.ts for specific documentation 
 * on properties and methods
 */
export class EnemyNear implements Predicate {

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
  getLabel(): string {
    return EnemyNear.label;
  }

  getAsCode(): string {
    return EnemyNear.asCode;
  }

}
