import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-set-name',
  templateUrl: './set-name.component.html',
  styleUrls: ['./set-name.component.css']
})
export class SetNameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SetNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  cancel(){

    this.data.cancelled = true;
    this.dialogRef.close();

  }

  enter(){

    if(this.data.name !== ''){
      this.dialogRef.close();
    }

  }

}
