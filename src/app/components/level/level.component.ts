import {Component, OnInit, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import * as createjs from "createjs-module";
import {SpriteService} from '../../services/game/sprite.service';
import {Unit} from '../../models/game/units/Unit';
import {SpriteConstants} from '../../services/SpriteConstants';
import {CodeService} from '../../services/program-construction/code.service';
import {GameLoopServiceService} from '../../services/game/gameloop/game-loop.service';
import {GameAction} from '../../models/game/GameAction';
import {LevelDataInterfaceService} from '../../services/game/levelDataInterface/level-data-interface.service';
import {ProgramData} from '../../models/database/DatabaseData';
import {Subject} from 'rxjs';
(<any>window).createjs = createjs;
let stage;
// TODO, makes these dynamic
let tiles_on_x = LevelDataInterfaceService.TESTGRID_SIZE.x;
let tiles_on_y = LevelDataInterfaceService.TESTGRID_SIZE.y
let canvas_width = tiles_on_x * 40;
let canvas_height = tiles_on_y * 40;

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
  public width = canvas_width;
  public height = canvas_height;
  private codeIndexGraphics: Array<{number: createjs.Text, location: {x: number, y: number}}> = [];
  private tickCount = 0;
  @Input()
  private testMode: boolean;
  @Input()
  private programData: ProgramData;
  @Input()
  private run: Subject<boolean>;
  @Input()
  private unitCodeChange: Subject<{unit: Unit, index: number}>;
  @Input()
  private gameLevelDataNum: string;
  @Input()
  private gamePlayerDataNum: string;
  @Output()
  private unitClickEvent: EventEmitter<Unit> = new EventEmitter<Unit>();
  @Output()
  private gameActionLogger: EventEmitter<GameAction> = new EventEmitter<GameAction>();

  constructor(private sprite: SpriteService, private code: CodeService, private loopservice: GameLoopServiceService) { }

  ngOnInit(): void {
    if(this.testMode !== undefined && this.programData !== undefined){

      this.loadGridData(this.programData);

    }else{
      throw new Error('display mode and program data must be defined in the component');
    }

    if(this.run !== undefined){
      this.run.subscribe(_ => {

        if(!this.gameStart){
          this.startGame();
        }else{
          this.resetGame();
        }

      });
    }
    if(this.unitCodeChange !== undefined && this.testMode){
      this.unitCodeChange.subscribe(data => {

        this.changeCodeIndexOfUnit(data.unit, data.index);

      });
    }

    createjs.Ticker.on('tick', _ => {

      stage.update();
      this.tickCount += 1;
      if(this.lastAction !== undefined && !(this.lastAction.actionId === "GameEnd2" || this.lastAction.actionId === "GameEnd1") && this.gameStart
        && this.tickCount % 20 === 0 && this.loading === 'done'){
        this.step();
      }

    });

  }

  loadGridData(programData){

    if(this.testMode){

      let self = this;
      this.loopservice.loadTestData(programData).then(result => {

        self.gameInit();

      });

    }else{
      //run the game
      tiles_on_x = LevelDataInterfaceService.PLAYSPACE_SIZE.x;
      tiles_on_y = LevelDataInterfaceService.PLAYSPACE_SIZE.y
      canvas_width = tiles_on_x * 40;
      canvas_height = tiles_on_y * 40;
      this.width = canvas_width;
      this.height = canvas_height;
      let self = this;

      if (this.gameLevelDataNum !== undefined && this.gamePlayerDataNum !== undefined) {
        this.loopservice.loadData(this.gameLevelDataNum, this.gamePlayerDataNum).then(result => {
          self.gameInit();
        });
      } else {
        throw new Error("a level number and program number for the player must be defined when not in test mode");
      }

    }

  }

  gameInit(){
    var self = this;
    if(this.loopservice.prepLoop()) {
      self.grid = self.loopservice.grid;
      let imageQueue = SpriteService.loadSpriteSheets();
      stage = new createjs.Stage('battlegrounds');
      imageQueue.on('complete', () => {
        let shape = new createjs.Shape();
        shape.graphics.beginBitmapFill(imageQueue.getResult(SpriteConstants.testMap)).drawRect(0, 0, canvas_width, canvas_height);
        stage.addChild(shape);
        this.drawGrid();
        for(let row of self.grid){
          this.sprite.initSpritesForAll(row, imageQueue);
          self.placeAllOnScreen(row);
        }

      })
      this.loading = "done";
    }

  }

  placeOnScreen(unit: Unit){

    let half_sprite_length = SpriteConstants.spriteSize / 2;

    /*
    Add half a sprite length in the end because the center of the sprite is placed at the corner of the
    square
     */
    unit.sprite.x = (unit.location.x * SpriteConstants.spriteSize) + half_sprite_length;
    unit.sprite.y = (unit.location.y * SpriteConstants.spriteSize) + half_sprite_length;
    if(this.testMode && !this.gameStart){
      let number = new createjs.Text(`${unit.testCodeIndex !== undefined ? unit.testCodeIndex: ''}`,
        "13px Roboto", "#7A3DB8");
      number.x = unit.sprite.x + 10;
      number.y = unit.sprite.y + 8;
      let numberRep = {number: number, location: unit.location}
      this.codeIndexGraphics.push(numberRep);
      stage.addChild(number);
    }

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
      // Assuming units of team 2 face west
      if(unit.team === 2){

        this.sprite.flipSpriteInPlace(unit);

      }

    }

  }

  drawGrid(){

    for(let i = 0; i < tiles_on_x;i++){
      for(let j = 0; j < tiles_on_y; j++){

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

      this.gameActionLogger.emit(this.lastAction);

      if(!(this.lastAction.doer === null)){

        this.placeOnScreen(this.lastAction.doer);
        this.placeOnGrid(this.lastAction.doer);

      }
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
    if(this.codeIndexGraphics.length !== 0){
      for(let numGraphic of this.codeIndexGraphics){
        stage.removeChild(numGraphic.number);
      }
    }
    this.gameStart = true;

  }
  resetGame(){

    this.gameStart = false;
    this.loadGridData(this.programData);
    this.tickCount = 0;
    this.lastAction = undefined;

  }

  placeOnGrid(unit){

    this.grid[unit.location.x][unit.location.y] = unit;

  }

  onGridClick(event){
    let location = {
      x: Math.floor((event.pageY - event.target.offsetTop) / 40),
      y: Math.floor((event.pageX - event.target.offsetLeft) / 40)
    };
    let unit = this.grid[location.x][location.y];
    if(unit !== null){
      this.unitClickEvent.emit(unit);
      console.log(unit);
    }
  }

  changeCodeIndexOfUnit(unit: Unit, index: number){

    unit.testCodeIndex = index;
    for(let numRep of this.codeIndexGraphics){

      if(numRep.location === unit.location){

        numRep.number.text = `${index}`;

      }

    }

  }


}
