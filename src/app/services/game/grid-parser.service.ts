import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridParserService {

  constructor() { }

  static isUnitOccupied(location, grid){

    return grid[location.x][location.y] !== null;

  }

  static isInBounds(location, grid){

    return location.x >= 0 && location.x < grid.length && location.y >= 0 && location.y < grid[0].length

  }

}
