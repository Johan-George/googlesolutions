import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgramData } from 'src/app/models/database/DatabaseData';
import { FirestoreDatabaseService } from 'src/app/services/database/firestore-database.service';

@Component({
  selector: 'app-prog-select-dialog',
  templateUrl: './prog-select-dialog.component.html',
  styleUrls: ['./prog-select-dialog.component.css']
})
export class ProgSelectDialogComponent {

  constructor(public dialogRef: MatDialogRef<ProgSelectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {id: string, prog:ProgramData}[]) { }

  onSelect(id: string) {
    this.dialogRef.close(id);
  }

}
