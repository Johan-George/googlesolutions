import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
import {AuthyLoginService} from '../../services/login/authy-login.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller, private router: Router, private auth: AuthyLoginService) { }

  ngOnInit(): void {
    if(!this.auth.checkSigninStatus()){
      this.router.navigate(['']);
    }
  }

  scrollToSection(sectionName){

    this.viewPortScroller.scrollToAnchor(sectionName);

  }

  goToJavascriptGuide(){
    this.router.navigate(['learn-js']);
    window.scroll(0, 0);
  }

}
