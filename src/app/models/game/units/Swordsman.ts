import {Unit} from './Unit';

export class Swordsman extends Unit{

  static dbid: string = btoa(Swordsman.name);
  id = -1
  maxHealth: number = 100;
  health: number = 100;
  defense: number = 10;
  strength: number = 25;
  attackRange: number = 1;
  walk_frames: Array<number> = [11, 18];
  attack_frames: Array<number> = [24, 32];

  constructor() {
    super();
  }



}
