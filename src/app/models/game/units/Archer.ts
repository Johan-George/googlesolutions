import {Unit} from './Unit';

export class Archer extends Unit{

  id = -1;
  maxHealth: number = 100;
  health: number = 100;
  defense: number = 5;
  strength: number = 15;
  attackRange: number = 4;
  walk_frames: Array<number> = [12, 19];
  attack_frames: Array<number> = [24, 35];

  constructor() {
    super();
  }


}
