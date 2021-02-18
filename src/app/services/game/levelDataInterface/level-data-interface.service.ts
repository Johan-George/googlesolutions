import { Injectable } from '@angular/core';
import { BlockCommand } from 'src/app/models/blockCommands/block-command';
import { ProgramData } from 'src/app/models/database/DatabaseData';
import { Unit } from 'src/app/models/game/Unit';
import { FirestoreDatabaseService } from '../../database/firestore-database.service';
import { CodeService } from '../../program-construction/code.service';

@Injectable({
  providedIn: 'root'
})
export class LevelDataInterfaceService {

  private PLAYSPACE_SIZE = {x: 20, y: 20};

  constructor(private database: FirestoreDatabaseService, private codeServ: CodeService) { }

  getGameInfo(levelid: string, programid: string): Promise<{team1Units: Unit[], team2Units: Unit[], griddimensions: {x: number, y: number}}> {
    var self = this;

    var curUnitId = 0;
    return new Promise((resolutionFunc, rejectiongFunc) =>{
      var returnObject: {team1Units: Unit[], team2Units: Unit[], griddimensions: {x: number, y: number}} = 
        {team1Units: [], team2Units: [], griddimensions: this.PLAYSPACE_SIZE};

      this.database.getLevelProgram(levelid, function(prog: ProgramData) {

        //fill team units
        for(var x = 0; x < prog.Units.length; x++) {

          var u: Unit = self.newUnitOnType(prog.Units[x].TroopType);
          u.id = curUnitId++;
          u.team = 2;
          u.activecode = self.deserializeBlockCode(prog.Units[x].CodeBlocks);
          u.location = prog.Units[x].location;
          
          returnObject.team2Units.push(u);
        }

        self.database.getProgramData(programid, function(playerProg: ProgramData) {

          //fill team units
          for(var x = 0; x < playerProg.Units.length; x++) {

            var u: Unit = self.newUnitOnType(playerProg.Units[x].TroopType);
            u.id = curUnitId++;
            u.team = 1;
            u.activecode = self.deserializeBlockCode(playerProg.Units[x].CodeBlocks);
            u.location = playerProg.Units[x].location;

            returnObject.team2Units.push(u);

          }

          resolutionFunc(returnObject);
        });
      });
    });
  }

  private newUnitOnType(id: number): Unit {
    return new Unit();
  }

  private deserializeBlockCode(code: string[]): BlockCommand[] {
    return this.codeServ.deserializeToBlocks(code);
  }

}