import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as createjs from "createjs-module";
import {Archer} from '../../models/game/units/Archer';
import {SpriteService} from '../../services/game/sprite.service';
import {Swordsman} from '../../models/game/units/Swordsman';
import {Unit} from '../../models/game/units/Unit';
import {SpriteConstants} from '../../services/SpriteConstants';
(<any>window).createjs = createjs;
let stage;
let tiles_on_side = 10;

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit, AfterViewInit {

  constructor(private sprite: SpriteService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    createjs.Ticker.on('tick', _ => {

      stage.update();

    });
    let imageQueue = SpriteService.loadSpriteSheets();
    stage = new createjs.Stage('battlegrounds');
    this.drawGrid();
    imageQueue.on('complete', () => {

      let archer = new Archer();
      let swordsman = new Swordsman();
      swordsman.location.x = 9;

      this.sprite.initSpritesForAll([archer, swordsman], imageQueue);
      this.placeAllOnGrid([archer, swordsman])

      stage.addChild(archer.sprite);
      stage.addChild(swordsman.sprite);

      archer.doWalkAnimation();

      swordsman.doWalkAnimation();
      this.sprite.flipSpriteInPlace(swordsman);

    });


  }

  placeOnGrid(unit: Unit){

    unit.sprite.x = unit.location.x * SpriteConstants.spriteSize;
    unit.sprite.y = unit.location.y * SpriteConstants.spriteSize;

  }

  placeAllOnGrid(units: Array<Unit>){

    for(let unit of units){

      this.placeOnGrid(unit);

    }

  }

  drawGrid(){

    for(let i = 0; i < tiles_on_side;i++){
      for(let j = 0; j < tiles_on_side; j++){

        let shape = new createjs.Shape();

        shape.graphics
          .beginStroke('black')
          .drawRect(i * SpriteConstants.spriteSize
            , j * SpriteConstants.spriteSize, SpriteConstants.spriteSize, SpriteConstants.spriteSize);

        stage.addChild(shape);

      }

    }

  }



}
