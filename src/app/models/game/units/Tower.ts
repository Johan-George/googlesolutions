import {Unit} from './Unit';

export class Tower extends Unit{

  static dbid: string = btoa(Tower.name);
  id = -1
  maxHealth: number = 100;
  health: number = 80;
  defense: number = 30;
  strength: number = 15;
  attackRange: number = 5;
  walk_frames: Array<number> = [0, 1];
  attack_frames: Array<number> = [2, 5];

  constructor() {
    super();
  }



}
