import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramData, UserData } from 'src/app/models/database/DatabaseData';
import { FirestoreDatabaseService } from 'src/app/services/database/firestore-database.service';
import { AuthyLoginService } from 'src/app/services/login/authy-login.service';

@Component({
  selector: 'app-profilepages',
  templateUrl: './profilepages.component.html',
  styleUrls: ['./profilepages.component.css']
})
export class ProfilepagesComponent {

  username: string = "User";
  levelStatus: string = "Level: 9000+";
  profileDescription: string = "I am a user";
  codes: ProgramData[] = [];
  selected: number = -1;

  constructor(private Auth: AuthyLoginService, private router: Router, private db: FirestoreDatabaseService) { 

    var self = this;

    if(!Auth.checkSigninStatus()) {
      router.navigate(['']);
    } else {
      db.getUserData(Auth.getUser().uid, function(result) {
        var usd: UserData;
        if(result == null) {
          usd = new UserData();
          usd.CompletedLevels = []
          usd.Description = "I am a user";
          usd.Level = 1;
          usd.Programs = []
          usd.Username = Auth.getUser().authDisplayName;
          self.db.setUserData(Auth.getUser().uid, usd).catch((reason) => {
            console.log("database write failed due to " + reason);
          });
        } else {
          usd = result;
        }
        self.username = usd.Username;
        self.levelStatus = "Level: " + usd.Level.toString();
        self.profileDescription = usd.Description;

        for(var x = 0; x < usd.Programs.length; x++) {
          db.getProgramData(usd.Programs[x].toString(), function(result) {
            self.codes.push(result);
          });
        }
      });
    }

  }

  changeSelected(x) {
    this.selected = x;
  }

}
