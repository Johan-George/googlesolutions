import { Component } from '@angular/core';
import { Else } from 'src/app/models/blockCommands/blocks/conditional/Else';
import { ElseIf } from 'src/app/models/blockCommands/blocks/conditional/ElseIf';
import { If } from 'src/app/models/blockCommands/blocks/conditional/If';
import { TextAction1 } from 'src/app/models/blockCommands/blocks/executable/TestAction1';
import { TextAction2 } from 'src/app/models/blockCommands/blocks/executable/TestAction2';
import { FalsePredicate } from 'src/app/models/blockCommands/blocks/predicate/FalsePredicate';
import { TruePredicate } from 'src/app/models/blockCommands/blocks/predicate/TruePredicate';
import { EndElse } from 'src/app/models/blockCommands/blocks/terminal/EndElse';
import { EndIf } from 'src/app/models/blockCommands/blocks/terminal/Endif';
import { CodeType } from 'src/app/models/database/DatabaseData';
import { GameAction } from 'src/app/models/game/GameAction';
import { Unit } from 'src/app/models/game/units/Unit';
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
    // var state = new If();
    // state.condition = new FalsePredicate();

    // var state2 = new ElseIf();
    // state2.condition = new FalsePredicate();

    // var cb = cds.serializeBlocks([state, new TextAction1(), state2, new TextAction1(), state2, new TextAction1(), new Else(), new TextAction2(), new EndElse()]);

    // db.setProgramData("2", {Name: "Hello", Verified: true,
    //     Units: [{TroopType:1, CodeBlocks: cb, location: {x:1,y:1}, CodeType: CodeType.BLOCK,
    //           CodeFile: null}]});
    //
    // db.setProgramData("2", {Name: "Hello", Verified: true,
    // Units: [{TroopType:1, CodeBlocks: null, location: {x:1,y:1}, CodeType: CodeType.FILE,
    //       CodeFile: {storageRef: "code/app.js", filename: "app.js"} }]});

    var self = this;

    db.getProgramData("1", function (data) {
      //run the game
      loopservice.loadTestData(data).then(result => {
        if (loopservice.prepLoop()) {
          self.map = self.loopservice.grid;
          this.loading = "done";
        }
      });
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
