import {Unit} from './Unit';

export class Tower extends Unit{

  static dbid: string = btoa(Tower.name);
  id = -1
  maxHealth: number = 100;
  health: number = 80;
  defense: number = 10;
  strength: number = 20;
  attackRange: number = 4;
  walk_frames: Array<number> = [11, 18];
  attack_frames: Array<number> = [24, 32];

  constructor() {
    super();
  }



}
