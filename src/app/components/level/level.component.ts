import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import * as createjs from 'createjs-module';
import {SpriteService} from '../../services/game/sprite.service';
import {Unit} from '../../models/game/units/Unit';
import {SpriteConstants} from '../../services/SpriteConstants';
import {CodeService} from '../../services/program-construction/code.service';
import {GameLoopServiceService} from '../../services/game/gameloop/game-loop.service';
import {GameAction} from '../../models/game/GameAction';
import {LevelDataInterfaceService} from '../../services/game/levelDataInterface/level-data-interface.service';
import {CodeType, ProgramData} from '../../models/database/DatabaseData';
import {Subject} from 'rxjs';
import {Archer} from '../../models/game/units/Archer';
import {East} from '../../models/blockCommands/blocks/executable/East';
import {Swordsman} from '../../models/game/units/Swordsman';
import {BlockService} from '../../services/program-construction/block.service';
import {FirestoreDatabaseService} from '../../services/database/firestore-database.service';
import {Tower} from '../../models/game/units/Tower';

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
export class LevelComponent implements OnInit, OnDestroy {

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
  private unitCodeChange: Subject<{unit: Unit, index: number, color: string}>;
  @Input()
  private saveFormationsAndCode: Subject<boolean>;
  @Output()
  private unitClickEvent: EventEmitter<Unit> = new EventEmitter<Unit>();
  @Output()
  private saveStateEvent: EventEmitter<Unit[][]> = new EventEmitter<Unit[][]>();
  @Input()
  private gameLevelDataNum: string;
  @Input()
  private gamePlayerDataNum: string;
  @Input()
  private updateProgramData: Subject<ProgramData>;
  @Input()
  private giveGridData: Subject<boolean>;
  @Output()
  private gameActionLogger: EventEmitter<GameAction> = new EventEmitter<GameAction>();
  @Output()
  private gridDataEvent: EventEmitter<Unit[][]> = new EventEmitter<Unit[][]>();
  private contextMenu: createjs.Container = null;
  private contextMenuBounds = {x: 0, y: 0, w: 0, h: 0};
  private unitsLeft = 5;
  private imageQueue = null;

  constructor(private sprite: SpriteService, private code: CodeService, private loopservice: GameLoopServiceService) { }

  ngOnDestroy(): void {
    this.gameStart = false;
  }

  ngOnInit(): void {
    if(this.testMode !== undefined && this.programData !== undefined){

      this.loadGridData(this.programData);

    }else{
      throw new Error('display mode and program data must be defined in the component');
    }

    if(this.run !== undefined){
      this.run.subscribe(_ => {

        if(this.loading === 'done') {
          if (!this.gameStart) {
            this.startGame();
            this.closeContextMenu();
          } else {
            this.resetGame();
          }
        }
      });
    }
    if(this.unitCodeChange !== undefined && this.testMode){
      this.unitCodeChange.subscribe(data => {

        this.changeCodeIndexOfUnit(data.unit, data.index, data.color);

      });
    }

    if(this.saveFormationsAndCode !== undefined){
      this.saveFormationsAndCode.subscribe(_ => {

        this.saveStateEvent.emit(this.grid);

      });
    }else{
      if(this.testMode){
        throw new Error('Save Formation And Code Subject must be defined in test mode');
      }

    }
    if(this.updateProgramData !== undefined && this.testMode){
      this.updateProgramData.subscribe(data => {
        this.programData = data;
      });
    }

    if(this.giveGridData !== undefined && this.testMode){
      this.giveGridData.subscribe(_ => {
        this.gridDataEvent.emit(this.grid);
      });
    }

    createjs.Ticker.on('tick', _ => {

      if(stage !== undefined){

        stage.update();
        this.tickCount += 1;
        if(this.lastAction !== undefined && !(this.lastAction.actionId === "GameEnd2" || this.lastAction.actionId === "GameEnd1") && this.gameStart
          && this.tickCount % 20 === 0 && this.loading === 'done'){
          this.step();
        }

      }

    });

  }

  initGridSize(){
    if(this.testMode){
      tiles_on_x = LevelDataInterfaceService.TESTGRID_SIZE.x;
      tiles_on_y = LevelDataInterfaceService.TESTGRID_SIZE.y
    }else{
      tiles_on_x = LevelDataInterfaceService.PLAYSPACE_SIZE.x;
      tiles_on_y = LevelDataInterfaceService.PLAYSPACE_SIZE.y
    }
    canvas_width = tiles_on_x * 40;
    canvas_height = tiles_on_y * 40;
    this.width = canvas_width;
    this.height = canvas_height;
  }

  loadGridData(programData){

    this.initGridSize();

    if(this.testMode){

      let self = this;
      this.loopservice.loadTestData(programData).then(result => {

        self.gameInit();

      });

    }else{
      //run the game
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
        this.imageQueue = imageQueue;
        for(let row of self.grid){
          this.sprite.initSpritesForAll(row, imageQueue);
          self.placeAllOnScreen(row);
        }
        self.addAllCodeIndexGraphics();
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
      let numberOffSetX = 10;
      let numberOffSetY = 8;
      if(!this.codeIndexGraphicExistsForUnit(unit)){
        let number = new createjs.Text(`${unit.testCodeIndex !== undefined ? unit.testCodeIndex: ''}`,
          "13px Roboto", "#7A3DB8");
        number.x = unit.sprite.x + numberOffSetX;
        number.y = unit.sprite.y + numberOffSetY;
        let numberRep = {number: number, location: unit.location}
        this.codeIndexGraphics.push(numberRep);
        stage.addChild(number);
      }
      // make the unit draggable to set formation
      unit.sprite.on('pressmove', e => {

        if(!this.gameStart && unit.team === 1){
          // @ts-ignore
          e.target.x = e.stageX;
          // @ts-ignore
          e.target.y = e.stageY;
        }

      });
      // snap the dragged unit to the center of the nearest tile
      unit.sprite.on('pressup', e => {

        if(!this.gameStart && unit.team === 1){

          //@ts-ignore
          let sprite = e.target;
          // @ts-ignore
          let new_x = (Math.floor(e.stageX / 40) * 40) + half_sprite_length;
          new_x = new_x < 400 ? new_x : 360 + half_sprite_length;
          // @ts-ignore
          let new_y = (Math.floor(e.stageY / 40) * 40) + half_sprite_length;

          let new_location = {
            x: Math.floor((new_x - half_sprite_length) / SpriteConstants.spriteSize),
            y: Math.floor((new_y - half_sprite_length) / SpriteConstants.spriteSize)
          }

          if(this.grid[new_location.x][new_location.y] === null){

            this.grid[unit.location.x][unit.location.y] = null;
            for(let numRep of this.codeIndexGraphics){

              if(numRep.location === unit.location){

                numRep.number.x = new_x + numberOffSetX;
                numRep.number.y = new_y + numberOffSetY;
                numRep.location = new_location;
                break;

              }

            }
            unit.location = new_location;
            this.grid[unit.location.x][unit.location.y] = unit;
            sprite.x = new_x;
            sprite.y = new_y;
            this.giveGridData.next(true);

          }else{

            unit.sprite.x = (unit.location.x * SpriteConstants.spriteSize) + half_sprite_length;
            unit.sprite.y = (unit.location.y * SpriteConstants.spriteSize) + half_sprite_length;

          }

        }

      });

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
      if(unit.team === 2 && unit.constructor.name !== Tower.name){

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
    let shape = new createjs.Shape();
    shape.graphics.setStrokeDash([2,2]);
    shape.graphics.setStrokeStyle(1)
      .beginStroke('red')
      .moveTo(400, 0)
      .lineTo(400, canvas_height)
      .endStroke();
    stage.addChild(shape);
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
        stage.removeChild(dead.sprite);
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

    this.loading = 'loading';
    this.grid = null;
    this.loopservice.grid = null;
    this.gameStart = false;
    stage.removeAllChildren();
    this.loadGridData(this.programData);
    this.tickCount = 0;
    this.lastAction = undefined;

  }

  placeOnGrid(unit){

    this.grid[unit.location.x][unit.location.y] = unit;

  }

  onGridClick(event){
    let location = {
      x: Math.floor((event.pageX - event.target.offsetLeft) / 40),
      y: Math.floor((event.pageY - event.target.offsetTop) / 40)
    };
    if(!this.inContextMenuBounds(location.x * 40, location.y * 40)){
      this.closeContextMenu();
    }
    let unit = this.grid[location.x][location.y];
    if(unit !== null && unit !== undefined){
      this.unitClickEvent.emit(unit);
    }
  }

  changeCodeIndexOfUnit(unit: Unit, index: number, color: string){

    unit.testCodeIndex = index;
    for(let numRep of this.codeIndexGraphics){

      if(numRep.location === unit.location){

        numRep.number.text = `${index}`;
        numRep.number.color = color;

      }

    }

  }

  codeIndexGraphicExistsForUnit(unit: Unit){
    for(let numRep of this.codeIndexGraphics){
      if(numRep.location === unit.location){
        return true;
      }
    }
    return false;
  }

  removeCodeIndexGraphicForUnit(unit: Unit){

    let index = this.codeIndexGraphics.findIndex(graphic => {
      return graphic.location === unit.location;
    });
    stage.removeChild(this.codeIndexGraphics[index].number);
    this.codeIndexGraphics.splice(index, 1);
  };

  addAllCodeIndexGraphics(){
    for(let shape of this.codeIndexGraphics){
      stage.addChild(shape.number);
    }
  }

  renderContextMenuAt(x, y, tileX, tileY){
    // create context menu
    let container = new createjs.Container();
    let containerConstants = {w:100, h:100, absx: x, absy: y};
    container.x = containerConstants.absx;
    container.y = containerConstants.absy;
    let background = new createjs.Shape();
    background.graphics.beginFill('#BEBEBE').drawRect(0, 0,
      containerConstants.w, containerConstants.h);
    background.graphics.beginStroke('black').drawRect(0, 0,
      containerConstants.w, containerConstants.h);
    container.addChild(background);

    // add units left text
    let unitsLeft = new createjs.Text();
    let unitsLeftTextConstants = {x: 3, y: 10};
    unitsLeft.font = '12px JetBrains Mono';
    unitsLeft.text = `Units Left: ${this.unitsLeft}`;
    unitsLeft.color = 'black';
    unitsLeft.x = unitsLeftTextConstants.x;
    unitsLeft.y = unitsLeftTextConstants.y;
    container.addChild(unitsLeft)

    // create add archer button
    let addArcherButton = new createjs.Shape();
    let archerButtonConstants = {x: 5, y: 25, w: 90, h: 20};
    let addArcherTextConstants = {x: 17, y: 30};
    addArcherButton.graphics.beginFill('white').drawRect(archerButtonConstants.x,
      archerButtonConstants.y, archerButtonConstants.w, archerButtonConstants.h);
    addArcherButton.graphics.beginStroke('black').drawRect(archerButtonConstants.x,
      archerButtonConstants.y, archerButtonConstants.w, archerButtonConstants.h);
    container.addChild(addArcherButton);
    let self = this;
    addArcherButton.on('click', _ => {
      if(self.loopservice.grid[tileX][tileY] === null && this.imageQueue !== null && this.unitsLeft > 0){
        let unit = new Archer();
        unit.team = 1;
        let team = self.loopservice.team1units;
        unit.id = team.length > 0 ? team[team.length - 1].id + 1 : 0;
        unit.activecode = [new East()];
        unit.location.x = tileX;
        unit.codeType = CodeType.BLOCK;
        unit.location.y = tileY;
        unit.initSprite(self.imageQueue.getResult(SpriteConstants.archer));
        self.loopservice.team1units.push(unit);
        self.loopservice.grid[tileX][tileY] = unit;
        self.placeOnGrid(unit);
        self.placeAllOnScreen([unit]);
        self.closeContextMenu();
        self.unitsLeft -= 1;
        self.giveGridData.next(true);
      }
    });
    let addArcher = new createjs.Text();
    addArcher.font = '11px JetBrains Mono';
    addArcher.text = 'Add Archer';
    addArcher.color = 'black';
    addArcher.x = addArcherTextConstants.x;
    addArcher.y = addArcherTextConstants.y;
    container.addChild(addArcher);

    // create add swordsman button
    let addSwordsmanButton = new createjs.Shape();
    let addSwordsmanButtonConstants = {x: 5, y: 50, w: 90, h: 20};
    let addSwordsmanTextConstants = {x: 7, y: 55};
    addSwordsmanButton.graphics.beginFill('white').drawRect(addSwordsmanButtonConstants.x,
      addSwordsmanButtonConstants.y, addSwordsmanButtonConstants.w, addSwordsmanButtonConstants.h);
    addSwordsmanButton.graphics.beginStroke('black').drawRect(addSwordsmanButtonConstants.x,
      addSwordsmanButtonConstants.y, addSwordsmanButtonConstants.w, addSwordsmanButtonConstants.h);
    container.addChild(addSwordsmanButton);
    addSwordsmanButton.on('click', _ => {
      if(self.loopservice.grid[tileX][tileY] === null && this.imageQueue !== null && this.unitsLeft > 0){
        let unit = new Swordsman();
        unit.team = 1;
        let team = self.loopservice.team1units;
        unit.id = team.length > 0 ? team[team.length - 1].id + 1 : 0;
        unit.activecode = [new East()];
        unit.location.x = tileX;
        unit.codeType = CodeType.BLOCK;
        unit.location.y = tileY;
        unit.initSprite(self.imageQueue.getResult(SpriteConstants.swordsmen));
        self.loopservice.team1units.push(unit);
        self.loopservice.grid[tileX][tileY] = unit;
        self.placeOnGrid(unit);
        self.placeAllOnScreen([unit]);
        self.closeContextMenu();
        self.unitsLeft -= 1;
        self.giveGridData.next(true);
      }
    });
    let addSwordsman = new createjs.Text();
    addSwordsman.font = '11px JetBrains Mono';
    addSwordsman.text = 'Add Swordsman';
    addSwordsman.color = 'black';
    addSwordsman.x = addSwordsmanTextConstants.x;
    addSwordsman.y = addSwordsmanTextConstants.y;
    container.addChild(addSwordsman);

    // create delete button
    let deleteButton = new createjs.Shape();
    let deleteButtonText = new createjs.Text();
    let deleteButtonConstants = {x: 5, y: 75, w: 90, h: 20};
    let deleteButtonTextConstants = {x: 13, y: 80};

    deleteButton.graphics.beginFill('white').drawRect(0,0, deleteButtonConstants.w, deleteButtonConstants.h);
    deleteButton.graphics.beginStroke('black').drawRect(0, 0, deleteButtonConstants.w, deleteButtonConstants.h);
    deleteButton.x = deleteButtonConstants.x;
    deleteButton.y = deleteButtonConstants.y;
    container.addChild(deleteButton);
    deleteButton.on('click', _ => {
      if(self.loopservice.grid[tileX][tileY] !== null && self.loopservice.grid[tileX][tileY].team !== 2 && this.unitsLeft !== 5){
        let unit = self.loopservice.grid[tileX][tileY];
        stage.removeChild(unit.sprite);
        this.loopservice.deleteUnit(unit);
        self.removeCodeIndexGraphicForUnit(unit);
        self.unitsLeft += 1;
        self.closeContextMenu();
        self.giveGridData.next(true);
      }
    });

    deleteButtonText.font = '11px JetBrains Mono';
    deleteButtonText.text = 'Delete Unit';
    deleteButtonText.color = 'black';
    deleteButtonText.x = deleteButtonTextConstants.x;
    deleteButtonText.y = deleteButtonTextConstants.y;
    container.addChild(deleteButtonText);


    this.contextMenu = container;
    this.contextMenuBounds.x = containerConstants.absx;
    this.contextMenuBounds.y = containerConstants.absy;
    this.contextMenuBounds.w = containerConstants.w;
    this.contextMenuBounds.h = containerConstants.h;
    stage.addChild(container);

  }

  onContextMenuOpen(event){

    event.preventDefault();
    if(this.contextMenu === null && !this.gameStart && this.testMode && this.loading === 'done'){
      this.renderContextMenuAt(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop,
        Math.floor((event.pageX - event.target.offsetLeft) / 40),
        Math.floor((event.pageY - event.target.offsetTop) / 40));
    }

  }

  inContextMenuBounds(x, y): boolean{

    return x >= this.contextMenuBounds.x && x <= this.contextMenuBounds.x + this.contextMenuBounds.w &&
      y >= this.contextMenuBounds.y && y <= this.contextMenuBounds.y + this.contextMenuBounds.h;

  }

  closeContextMenu(){
    stage.removeChild(this.contextMenu);
    this.contextMenu = null;
  }

}
