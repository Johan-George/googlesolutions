import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as createjs from "createjs-module";
import {Archer} from '../../models/game/units/Archer';
import {SpriteService} from '../../services/game/sprite.service';
import {Swordsman} from '../../models/game/units/Swordsman';
import {Unit} from '../../models/game/units/Unit';
import {SpriteConstants} from '../../services/SpriteConstants';
import {Forward} from '../../models/blockCommands/blocks/executable/Forward';
import {CodeService} from '../../services/program-construction/code.service';
import {Left} from '../../models/blockCommands/blocks/executable/Left';
import {Wait} from '../../models/blockCommands/blocks/executable/Wait';
import {Right} from '../../models/blockCommands/blocks/executable/Right';
(<any>window).createjs = createjs;
let stage;
let tiles_on_side = 10;

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit, AfterViewInit {

  private grid: Unit[][];
  private units: Unit[];
  private compiled = [];
  private unitIndex = 0;

  constructor(private sprite: SpriteService, private code: CodeService) { }

  ngOnInit(): void {
    this.grid = [];

    for (var row = 0; row < tiles_on_side; row++) {
      this.grid[row] = [];
      for (var col = 0; col < tiles_on_side; col++) {
        this.grid[row][col] = null;
      }
    }
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
      this.units = [archer, swordsman];
      swordsman.activecode = [new Right()];
      archer.activecode = [new Right()];
      swordsman.location.x = 9;

      this.sprite.initSpritesForAll(this.units, imageQueue);
      this.placeAllOnScreen(this.units);
      this.placeAllOnGrid(this.units);

      stage.addChild(archer.sprite);
      stage.addChild(swordsman.sprite);

      this.sprite.flipSpriteInPlace(swordsman);
      this.compile();

    });


  }

  placeOnScreen(unit: Unit){

    let half_sprite_length = SpriteConstants.spriteSize / 2;

    /*
    Add half a sprite length in the end because the center of the sprite is placed at the corner of the
    square
     */
    unit.sprite.x = (unit.location.x * SpriteConstants.spriteSize) + half_sprite_length;
    unit.sprite.y = (unit.location.y * SpriteConstants.spriteSize) + half_sprite_length;

  }

  placeAllOnScreen(units: Array<Unit>){

    for(let unit of units){

      this.placeOnScreen(unit);

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

  compile(){

    for(let unit of this.units){

      this.compiled.push(this.code.compileToExecutableCode(unit.activecode));

    }

  }

  step(){

    for(let func of this.compiled[this.unitIndex]){

      func(this.grid, this.units[this.unitIndex]);

    }
    this.placeOnScreen(this.units[this.unitIndex]);
    this.placeOnGrid(this.units[this.unitIndex])
    if(this.unitIndex === this.units.length - 1){
      this.unitIndex = 0;
    }else{
      this.unitIndex++;
    }

  }

  placeOnGrid(unit){

    this.grid[unit.location.x][unit.location.y] = unit;

  }

  placeAllOnGrid(units: Array<Unit>){

    for(let unit of units){

      this.placeOnGrid(unit);

    }

  }


}
