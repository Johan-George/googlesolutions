import { Component, OnInit } from '@angular/core';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LevelData, ProgramData } from 'src/app/models/database/DatabaseData';
import { FirestoreDatabaseService } from 'src/app/services/database/firestore-database.service';
import { AuthyLoginService } from 'src/app/services/login/authy-login.service';
import { ProgSelectDialogComponent } from '../prog-select-dialog/prog-select-dialog.component';

@Component({
  selector: 'app-levelselect',
  templateUrl: './levelselect.component.html',
  styleUrls: ['./levelselect.component.css'],
  host: {
    class: 'fullpage'
  }
})
export class LevelselectComponent {

  levelSelect: boolean = true;
  loadingData: boolean = true;
  noData: boolean = false;
  ownedProgs: {id: string, prog:ProgramData}[] = [];

  ldata: { id: string, completed: boolean, dbid: string }[] = [];

  constructor(private router: Router, private db: FirestoreDatabaseService, private auth: AuthyLoginService, private dialog: MatDialog) {

    if (!auth.checkSigninStatus()) {
      router.navigate(['signin']);
    }

    var self = this;

    if (router.url === '/tutorials') {
      this.levelSelect = false;
    } else {
      this.levelSelect = true;
    }

    db.getAllLevels(function (result) {
      for (let doc of result.docs) {
        if (router.url === '/tutorials') {
          if (doc.exists && doc.id.length > 2 && doc.id.indexOf("99") == 0) {
            self.ldata.push({ id: "Tutorial: " + doc.id.substring(2, doc.id.length), completed: false, dbid: doc.id });
          }
        } else {
          if (doc.exists && doc.id.indexOf("99") != 0) {
            self.ldata.push({ id: "Level: " + doc.id, completed: false, dbid: doc.id });
          }
        }
      }

      db.getUserData(auth.getUser().uid, function (result) {

        if (result == null) {
          router.navigate(['profile']);
        }

        for (let l of result.CompletedLevels) {
          for (let d of self.ldata) {
            console.log("checking " + d.id);
            if (self.levelSelect) {
              if (d.id.substring(7, d.id.length) == l) {
                d.completed = true;
              }
            } else {
              if (("99" + d.id.substring(10, d.id.length)) == l) {
                d.completed = true;
              }
            }

          }
        }

        for (let p of result.Programs) {
          self.db.getProgramData(p.toString(), function(result) {
            self.ownedProgs.push({id: p.toString(), prog: result});
          });
        }

        self.loadingData = false;
        if (self.ldata.length <= 0) {
          self.noData = true;
        }
      });


    });
  }

  goToLevel(i: string) {
    //open dialog for program select
    const dialogRef = this.dialog.open(ProgSelectDialogComponent, {data: this.ownedProgs, panelClass: 'defaultDialog'});

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined) {
        //had returned a value
        this.router.navigate(["play"], {
          queryParams: {
            l: i,
            p: result
          }
        });
      }
    });
  }

}
