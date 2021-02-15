import { Injectable } from '@angular/core';
import { Unit } from 'src/app/models/game/Unit';

@Injectable({
  providedIn: 'root'
})
export class LevelDataInterfaceService {

  constructor() { }

  getGameInfo(): {team1Units: Unit[], team2Units: Unit[], griddimensions: {x: number, y: number}} {
    //TODO GET GAME INFO
    return null;
  }

}