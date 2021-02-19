import { Component } from '@angular/core';
import { GameAction } from 'src/app/models/game/GameAction';
import { Unit } from 'src/app/models/game/Unit';
import { FirestoreDatabaseService } from 'src/app/services/database/firestore-database.service';
import { GameLoopServiceService } from 'src/app/services/game/gameloop/game-loop.service';
import { CodeService } from 'src/app/services/program-construction/code.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  public map: Unit[][];
  public lastAction: GameAction;
  public loading: string = "loading";

  constructor(private db: FirestoreDatabaseService, private cds: CodeService, private loopservice: GameLoopServiceService) {
    // db.getProgramData("1", function(data) {
    //   console.log(data.Units[0].TroopType);
    // });
    //
    // var cb = cds.serializeBlocks([new TextAction1, new TextAction2])
    //
    // db.setProgramData("3", {Name: "Hello", Verified: true,
    //     Units: [{TroopType:1, CodeBlocks: cb, location: {x:5,y:5}, CodeType: CodeType.BLOCK,
    //           CodeFile: null}]});
    //
    // db.setProgramData("2", {Name: "Hello", Verified: true,
    // Units: [{TroopType:1, CodeBlocks: null, location: {x:1,y:1}, CodeType: CodeType.FILE,
    //       CodeFile: {storageRef: "code/app.js", filename: "app.js"} }]});


    var self = this;
    //run the game
    loopservice.loadData("1","2").then(result => {
      if(loopservice.prepLoop()) {
        self.map = self.loopservice.grid;
        this.loading = "done";
      }
    });
  }

  stepGameButton() {
    this.loading = "loading";
    var prom = this.loopservice.stepGame();

    prom.then(result => {
      this.lastAction = result as GameAction;
      this.loading = "done";
    });

    prom.catch(result => {
      this.loading = "error last action!";
    });
  }

}
