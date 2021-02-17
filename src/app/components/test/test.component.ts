import { Component } from '@angular/core';
import { FirestoreDatabaseService } from 'src/app/services/database/firestore-database.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private db: FirestoreDatabaseService) { 
    //db.getProgramData("1", function(data) {
      //console.log(data.Units[0].TroopType);
    //});
    //db.setProgramData("2", {Name: "Hello", Verified: true, Units: [{TroopType:3, CodeBlocks: ["0","2"], location: {x:5,y:5}}]})
  }

}
