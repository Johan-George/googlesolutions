import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserData } from 'src/app/models/database/DatabaseData';
import { GameAction } from 'src/app/models/game/GameAction';
import { FirestoreDatabaseService } from 'src/app/services/database/firestore-database.service';
import { AuthyLoginService } from 'src/app/services/login/authy-login.service';

@Component({
  selector: 'app-levelplay',
  templateUrl: './levelplay.component.html',
  styleUrls: ['./levelplay.component.css']
})
export class LevelplayComponent {

  run: Subject<boolean> = new Subject<boolean>();
  testmode: boolean = false;
  nullprogramData = null;

  levData: string;
  progData: string;

  logColumns = ["id", "msg"];
  logData: MatTableDataSource<{id: number, msg: string}> = new MatTableDataSource<{id: number, msg: string}>();
  actionLog: {id: number, msg: string}[] = [];
  actionlogNum: number = 1;

  started: boolean = false;

  userData: UserData;

  @ViewChild("datalogTable", { read: ElementRef })
  datalogTable: ElementRef;

  constructor(private route: ActivatedRoute,  private changeDetectorRefs: ChangeDetectorRef, private db: FirestoreDatabaseService, 
      private Auth: AuthyLoginService, private router: Router) {
    if(!Auth.checkSigninStatus()) {
      router.navigate(['/signin']);
    } else {
      var self = this;
      db.getUserData(Auth.getUser().uid, function(result) {
        console.log("Recieved UserData");
        self.userData = result;
      });

      route.queryParams.subscribe(params => {
        this.levData = params.l;
        this.progData = params.p;
      });
    }
    
  }

  startGame() {
    this.run.next(true);
  }

  newGameAction(action: GameAction) {

    console.log("called");

    switch(action.actionId) {
      case "GameEnd2":
        this.addActionToLog("You lost the game");
      break;

      case "GameEnd1":
        this.addActionToLog("You won the game");
        this.addWinToPlayer();
      break;

      case "NoEvent":
        this.addActionToLog("Nothing Happened");
      break;

      case "Attack":
        this.addActionToLog("Unit " + action.doer.id + " attacked unit " + action.receiver.id);
        if(action.hasDied) {
          this.addActionToLog("Unit " + action.receiver.id + " died");
        }
      break;

      case "Wait":
        this.addActionToLog("Unit " + action.doer.id + " Waited");
      break;

      case "North":
        this.addActionToLog("Unit " + action.doer.id + " moved " + action.actionId);
      break;

      case "East":
        this.addActionToLog("Unit " + action.doer.id + " moved " + action.actionId);
      break;

      case "South":
        this.addActionToLog("Unit " + action.doer.id + " moved " + action.actionId);
      break;

      case "West":
        this.addActionToLog("Unit " + action.doer.id + " moved " + action.actionId);
      break;

      default:
        this.addActionToLog("Unexpected action: \"" + action.actionId + "\"" + action.doer.id);
    }
    this.changeDetectorRefs.detectChanges();
    console.log("length " + this.actionLog.length);
  }

  private addActionToLog(msg: string) {
    this.actionLog.push({id: this.actionlogNum, msg});
    this.logData.data = this.actionLog;
    this.actionlogNum++;
    this.datalogTable.nativeElement.scrollTop = this.datalogTable.nativeElement.scrollHeight;
  }

  private addWinToPlayer() {
    if(this.userData != undefined) {

      this.userData.CompletedLevels.push(parseInt(this.levData));

      this.db.setUserData(this.Auth.getUser().uid, this.userData);

    } else {
      console.log("Database is taking wayyyy too long");
    }
  }

}
