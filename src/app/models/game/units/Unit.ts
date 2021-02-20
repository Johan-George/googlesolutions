import { CodeType } from "../../database/DatabaseData";
import * as createjs from 'createjs-module';
import {SpriteConstants} from '../../../services/SpriteConstants';
/**
 * Object that represents a Unit on the grid
 */
class AnimationConstants{

  static walk: string = 'walk';
  static idle: string = 'idle';
  static attack: string = 'attack';

}

export class Unit {

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

  /**
   * The code the that unit can run
   */
  codeType: CodeType = CodeType.NONE;
  activecode: any = [];
  maxHealth: number = 100;
  health: number = 100;
  defense: number = 10;
  strength: number = 20;
  attackRange: number = 1;
  sprite: createjs.Sprite;
  walk_frames: Array<number>;
  attack_frames: Array<number>;

  constructor() {}

  initSprite(imageData){

    let data = {
      'images': [imageData],
      'frames': {width:SpriteConstants.spriteSize,
        height:SpriteConstants.spriteSize, regX: 20, regY:20, spacing:0, margin:0},
      'animations': {
        'idle':[0],
        'walk':[this.walk_frames[0], this.walk_frames[1], 'idle' ,0.25],
        'attack': [this.attack_frames[0], this.attack_frames[1], 'idle', 0.25]
      }
    };
    let spriteSheet = new createjs.SpriteSheet(data);
    this.sprite = new createjs.Sprite(spriteSheet, 'idle');

  }

  doIdleAnimation(){

    this.sprite.gotoAndPlay(AnimationConstants.idle);

  }

  doAttackAnimation(){

    this.sprite.gotoAndPlay(AnimationConstants.attack);

  }

  doWalkAnimation(){

    this.sprite.gotoAndPlay(AnimationConstants.walk);

  }

}
