import {Unit} from './Unit';
import {SpriteConstants, SpriteService} from '../../../services/game/sprite.service';

export class Archer extends Unit{

  id = -1;
  maxHealth: number = 100;
  health: number = 100;
  defense: number = 5;
  strength: number = 15;
  attackRange: number = 4;

  constructor() {
    super();
  }


}
