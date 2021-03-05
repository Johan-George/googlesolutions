import { Injectable } from '@angular/core';
import { BlockCommand } from 'src/app/models/blockCommands/block-command';
import { CodeType, ProgramData } from 'src/app/models/database/DatabaseData';
import { Unit } from 'src/app/models/game/units/Unit';
import { FirestoreDatabaseService } from '../../database/firestore-database.service';
import { CodeService } from '../../program-construction/code.service';
import { Archer } from '../../../models/game/units/Archer';
import { Swordsman } from 'src/app/models/game/units/Swordsman';
import { Wait } from 'src/app/models/blockCommands/blocks/executable/Wait';

@Injectable({
  providedIn: 'root'
})
export class LevelDataInterfaceService {

  private PLAYSPACE_SIZE = { x: 20, y: 20 };
  private TESTGRID_SIZE = { x: 20, y: 20 };

  constructor(private database: FirestoreDatabaseService, private codeServ: CodeService) { }

  getGameInfo(levelid: string, programid: string): Promise<{ team1Units: Unit[], team2Units: Unit[], griddimensions: { x: number, y: number } }> {
    var self = this;

    var curUnitId = 0;
    return new Promise((resolutionFunc, rejectionFunc) => {
      var returnObject: { team1Units: Unit[], team2Units: Unit[], griddimensions: { x: number, y: number } } =
        { team1Units: [], team2Units: [], griddimensions: this.PLAYSPACE_SIZE };

      this.database.getLevelProgram(levelid, function (prog: ProgramData) {

        var progPromises: Array<Promise<void>> = []

        //fill team units
        for (var x = 0; x < prog.Units.length; x++) {

          var u: Unit = self.newUnitOnType(prog.Units[x].TroopType);
          u.id = curUnitId++;
          u.team = 2;
          u.location = prog.Units[x].location;
          if (prog.Units[x].CodeType === CodeType.BLOCK) {
            u.codeType = CodeType.BLOCK;
            u.activecode = self.deserializeBlockCode(prog.Units[x].CodeBlocks);
          } else if (prog.Units[x].CodeType === CodeType.FILE) {
            u.codeType = CodeType.FILE;
            progPromises.push(new Promise((resolveP, rejectP) => {
              self.database.getUserCodeFromStorage(prog.Units[x].CodeFile.storageRef, prog.Units[x].CodeFile.filename, function (data) {
                u.activecode = data;
                resolveP();
              });
            }));
          } else {
            console.log("Illegal code type, continuing");
            continue;
          }

          returnObject.team2Units.push(u);
        }

        self.database.getProgramData(programid, function (playerProg: ProgramData) {

          //fill team units
          for (var x = 0; x < playerProg.Units.length; x++) {

            var u: Unit = self.newUnitOnType(playerProg.Units[x].TroopType);
            u.id = curUnitId++;
            u.team = 1;
            u.location = playerProg.Units[x].location;
            if (playerProg.Units[x].CodeType == CodeType.BLOCK) {
              u.codeType = CodeType.BLOCK;
              u.activecode = self.deserializeBlockCode(playerProg.Units[x].CodeBlocks);
            } else if (playerProg.Units[x].CodeType == CodeType.FILE) {
              u.codeType = CodeType.FILE;
              // progPromises.push(new Promise((resolveP, rejectP) => {
              //   self.database.getUserCodeFromStorage(playerProg.Units[x].CodeFile.storageRef, playerProg.Units[x].CodeFile.filename, function (data) {
              //     u.activecode = data;
              //     resolveP();
              //   });
              // }));
              progPromises.push(self.getStorageReadPromise(playerProg.Units[x].CodeFile.storageRef, playerProg.Units[x].CodeFile.filename, u));
            } else {
              console.log("Illegal code type, continuing of type " + (playerProg.Units[x].CodeType.toString()));
              continue;
            }
            returnObject.team1Units.push(u);
          }

          Promise.all(progPromises).then(function (val) {
            resolutionFunc(returnObject);
          });
        });
      });
    });
  }

  getGameInfoTesting(programData: ProgramData): Promise<{ team1Units: Unit[], team2Units: Unit[], griddimensions: { x: number, y: number } }> {

    return new Promise<{ team1Units: Unit[], team2Units: Unit[], griddimensions: { x: number, y: number } }>((resolutionFunc, rejectionFunc) => {
      var testUnit: Unit = new Unit();
      testUnit.codeType = CodeType.BLOCK;
      testUnit.activecode = [new Wait()];
      testUnit.team = 2;
      testUnit.location = { x: 19, y: 19 };

      var result: { team1Units: Unit[], team2Units: Unit[], griddimensions: { x: number, y: number } } = {
        team1Units: [],
        team2Units: [testUnit],
        griddimensions: this.TESTGRID_SIZE
      };

      var progPromises: Array<Promise<void>> = [];
      var curUnitId = 0;
      var self = this;

      for (var x = 0; x < programData.Units.length; x++) {
        var u: Unit = this.newUnitOnType(programData.Units[x].TroopType);
        u.id = curUnitId++;
        u.team = 2;
        u.location = programData.Units[x].location;
        if (programData.Units[x].CodeType == CodeType.BLOCK) {
          u.codeType = CodeType.BLOCK;
          u.activecode = this.deserializeBlockCode(programData.Units[x].CodeBlocks);
        } else if (programData.Units[x].CodeType == CodeType.FILE) {
          u.codeType = CodeType.FILE;
          // progPromises.push(new Promise<void>((resolveP, rejectP) => {
          //   self.database.getUserCodeFromStorage(programData.Units[x].CodeFile.storageRef, programData.Units[x].CodeFile.filename, function (data) {
          //     u.activecode = data;
          //     resolveP();
          //   });
          //}));
          progPromises.push(self.getStorageReadPromise(programData.Units[x].CodeFile.storageRef, programData.Units[x].CodeFile.filename, u));
        } else {
          console.log("Illegal code type, continuing");
          continue;
        }

        result.team1Units.push(u);

        Promise.all(progPromises).then(function (val) {
          resolutionFunc(result);
        });
      }

    });


  }

  private newUnitOnType(id: string): Unit {
    switch (id) {
      case Archer.dbid:
        return new Archer();
      case Swordsman.dbid:
        return new Swordsman;
      default:
        return new Unit();
    }
  }

  private deserializeBlockCode(code: string[]): BlockCommand[] {
    return this.codeServ.deserializeToBlocks(code);
  }

  private getStorageReadPromise(storageRef, filename, passedunit) {
    var self = this;
    return new Promise<void>((resolveP, rejectP) => {
      self.database.getUserCodeFromStorage(storageRef, filename, function (data) {
        passedunit.activecode = data;
        resolveP();
      })
    });
  }

}
