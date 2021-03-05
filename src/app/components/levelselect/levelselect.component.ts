import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-levelselect',
  templateUrl: './levelselect.component.html',
  styleUrls: ['./levelselect.component.css']
})
export class LevelselectComponent {

  constructor(router: Router) {
    
    if(router.url === '/tutorials') {
      //load tutorials from data
    } else {
      //load levels from data
    }
  }

}
