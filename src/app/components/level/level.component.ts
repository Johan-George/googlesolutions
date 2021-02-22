import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as createjs from "createjs-module";
import {SpriteService} from '../../services/game/sprite.service';
import {Unit} from '../../models/game/units/Unit';
import {SpriteConstants} from '../../services/SpriteConstants';
import {CodeService} from '../../services/program-construction/code.service';
import {GameLoopServiceService} from '../../services/game/gameloop/game-loop.service';
import {GameAction} from '../../models/game/GameAction';
(<any>window).createjs = createjs;
let stage;
let tiles_on_side = 20;
let canvas_length = 800;

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  private grid: Unit[][];
  public loading: string = "loading";
  private lastAction: GameAction;
  private gameStart = false;

  constructor(private sprite: SpriteService, private code: CodeService, private loopservice: GameLoopServiceService) { }

  ngOnInit(): void {
    var self = this;
    //run the game
    this.loopservice.loadData("1","3").then(result => {
      if(this.loopservice.prepLoop()) {
        self.grid = self.loopservice.grid;
        let imageQueue = SpriteService.loadSpriteSheets();
        stage = new createjs.Stage('battlegrounds');
        imageQueue.on('complete', () => {
          let shape = new createjs.Shape();
          shape.graphics.beginBitmapFill(imageQueue.getResult(SpriteConstants.testMap)).drawRect(0, 0, canvas_length, canvas_length);
          stage.addChild(shape);
          this.drawGrid();
          for(let row of self.grid){
            this.sprite.initSpritesForAll(row, imageQueue);
            self.placeAllOnScreen(row);
          }

        })
        let tickCount = 0;
        createjs.Ticker.on('tick', _ => {

          stage.update();
          tickCount += 1;
          if(this.lastAction !== undefined && !(this.lastAction.actionId === "GameEnd2" || this.lastAction.actionId === "GameEnd1") && this.gameStart
            && tickCount % 20 === 0 && this.loading === 'done'){
            this.step();
          }

        });
        this.loading = "done";
      }
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

  /**
   * inits all the units on screen (only called on game init)
   * @param units a row on the grid
   */
  placeAllOnScreen(units: Array<Unit>){

    for(let unit of units){

      if(unit === null){
        continue;
      }

      this.placeOnScreen(unit);
      stage.addChild(unit.sprite);
      // Assuming units of team 1 face left
      if(unit.team === 1){

        this.sprite.flipSpriteInPlace(unit);

      }

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

  step(){

    this.loading = "loading";
    var prom = this.loopservice.stepGame();

    prom.then(result => {
      this.lastAction = result as GameAction;
      this.loading = "done";
      if(!(this.lastAction.doer === null)){

        this.placeOnScreen(this.lastAction.doer);
        this.placeOnGrid(this.lastAction.doer);

      }
      //console.log(this.lastAction);
      if(this.lastAction.hasDied){

        let dead = this.lastAction.receiver
        this.grid[dead.location.x][dead.location.y] = null;
        stage.removeChild(dead.sprite);
        this.loopservice.deleteUnit(dead);
        console.log('Death happened');

      }

    });

    prom.catch(result => {
      this.loading = "error last action!";
    });

  }

  startGame(){

    this.step();
    this.gameStart = true;

  }

  placeOnGrid(unit){

    this.grid[unit.location.x][unit.location.y] = unit;

  }


}
