import { Injectable } from '@angular/core';
import * as createjs from "createjs-module";
(<any>window).createjs = createjs;

export class SpriteConstants{

  static archer: string = 'Archer';
  static swordsmen: string = 'Swordsmen';

}


@Injectable({
  providedIn: 'root'
})
export class SpriteService {

  constructor() {}

  static loadSpriteSheets(){
    let manifest = [
      {id:SpriteConstants.archer, src: 'assets/animations/archer sprite sheet.png'},
      {id:SpriteConstants.swordsmen, src: 'assets/animations/swordsman sprite sheet.png'}
    ];
    let queue = new createjs.LoadQueue();
    queue.loadManifest(manifest);
    return queue;

  }


}
