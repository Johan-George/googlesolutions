import { GameAction } from 'src/app/models/game/GameAction';
import { Executable } from '../../block-command';
import {Unit} from '../../../game/units/Unit';
import {Wait} from './Wait';

/**
 * Executable representing an attack
 * See block-command.ts for specific documentation
 * on properties and methods
 */
export class Attack implements Executable {

  static label: string = 'Attack';
  static id: string = btoa(Attack.name);
  static asCode = 'this.postMessage({result: \'Attack\'});';
  indentationLevel: number;

  execute(grid: Array<Array<Unit>>, unit: Unit): GameAction {
    // for(let x = 0; x < grid.length; x++){
    //   for(let y = 0; y < grid[0].length; y++){
    //     let other = grid[x][y];
    //     if(!((unit.location.x === x && unit.location.y === y) || other === null || other.team === unit.team)){
    //       if((x >= unit.location.x - unit.attackRange && x <= unit.location.x + unit.attackRange) &&
    //         (y >= unit.location.y - unit.attackRange && y <= unit.location.x + unit.attackRange)){
    //         let died = false;
    //         let damage = unit.strength - other.defense;
    //         other.health = damage > 0 ? other.health - damage : other.health;
    //         if(other.health <= 0){
    //           died = true;
    //         }
    //         console.log(other.health);
    //         unit.doAttackAnimation();
    //         return new GameAction(Attack.name, unit, other, died);
    //       }
    //     }
    //   }
    // }

    var closestUnit: Unit = this.getClosestEnemy(grid, unit);

    if (closestUnit != null) {
      if ((closestUnit.location.x >= unit.location.x - unit.attackRange && closestUnit.location.x <= unit.location.x + unit.attackRange) &&
        (closestUnit.location.y >= unit.location.y - unit.attackRange && closestUnit.location.y <= unit.location.x + unit.attackRange)) {

        //they are in range
        let died = false;
        let damage = unit.strength - closestUnit.defense;
        closestUnit.health = damage > 0 ? closestUnit.health - damage : closestUnit.health;
        if (closestUnit.health <= 0) {
          died = true;
        }
        console.log(closestUnit.health);
        unit.doAttackAnimation();
        return new GameAction(Attack.name, unit, closestUnit, died);
      }
    }
    return new GameAction(Wait.name, unit, null, false);
  }

  getId(): string {
    return Attack.id;
  }

  getLabel() {
    return Attack.label;
  }

  getAsCode(): string {
    return Attack.asCode;
  }

  //finds closest enemy of another team
  private getClosestEnemy(grid: Array<Array<Unit>>, unit: Unit): Unit {
    var closest = null;
    var closestDist = 1000;

    for(let x = 0; x < grid.length; x++){
      for(let y = 0; y < grid[0].length; y++){
        let other = grid[x][y];
        if(!((unit.location.x === x && unit.location.y === y) || other === null || other.team === unit.team)){

          var distance = Math.floor(Math.sqrt(Math.pow(unit.location.x - x, 2) + Math.pow(unit.location.y - y, 2)));

          if (distance < closestDist) {
            closest = other;
          }

        }
      }
    }

    return closest;
  }

}

