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
    for(let x = 0; x < grid.length; x++){
      for(let y = 0; y < grid[0].length; y++){
        let other = grid[x][y];
        if(!((unit.location.x === x && unit.location.y === y) || other === null || other.team === unit.team)){
          if((x >= unit.location.x - unit.attackRange && x <= unit.location.x + unit.attackRange) &&
            (y >= unit.location.y - unit.attackRange && y <= unit.location.x + unit.attackRange)){
            return true;
          }
        }
      }
    }
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
