import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as createjs from "createjs-module";
import {Archer} from '../../models/game/units/Archer';
import {SpriteConstants, SpriteService} from '../../services/game/sprite.service';
(<any>window).createjs = createjs;
let stage;

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    createjs.Ticker.on('tick', _ => {

      stage.update();

    });
    let imageQueue = SpriteService.loadSpriteSheets();
    stage = new createjs.Stage('battlegrounds');
    imageQueue.on('complete', () => {

      let archer = new Archer();
      archer.initSprite(imageQueue.getResult(SpriteConstants.archer));
      console.log(imageQueue.getResult(SpriteConstants.archer));
      stage.addChild(archer.sprite);

      archer.sprite.x = 40;
      archer.sprite.y = 40;
      archer.doAttackAnimation();

    });


  }


}
