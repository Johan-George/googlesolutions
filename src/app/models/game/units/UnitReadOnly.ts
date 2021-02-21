import {Unit} from './Unit';

export class UnitReadOnly{

  /**
   * The Id number on the grid of the unit
   */
  id: number = -1;

  /**
   * The team that the unit belongs to
   */
  team: number = -1;

  /**
   * the location of the unit on the grid
   */
  location: { x: number, y: number } = { x: 0, y: 0 };
  maxHealth: number = 100;
  health: number = 100;
  defense: number = 10;
  strength: number = 20;
  attackRange: number = 1;

  constructor(unit: Unit) {

    this.id = unit.id;
    this.team = unit.team;
    this.location = unit.location;
    this.maxHealth = unit.maxHealth;
    this.health = unit.health;
    this.strength = unit.strength;
    this.attackRange = unit.attackRange;

  }

}
