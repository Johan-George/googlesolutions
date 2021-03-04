import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilepages',
  templateUrl: './profilepages.component.html',
  styleUrls: ['./profilepages.component.css']
})
export class ProfilepagesComponent {

  username: string = "User";
  levelStatus: string = "Level: 9000+";
  profileDescription: string = "I am a weirdo";

  constructor() { }

}
