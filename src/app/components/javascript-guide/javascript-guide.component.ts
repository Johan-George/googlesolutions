import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {AuthyLoginService} from '../../services/login/authy-login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-javascript-guid',
  templateUrl: './javascript-guide.component.html',
  styleUrls: ['../docs/docs.component.css']
})
export class JavascriptGuideComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller,
              private auth: AuthyLoginService, private router: Router) { }

  ngOnInit(): void {
    if(!this.auth.checkSigninStatus()){
      this.router.navigate(['']);
    }
  }

  scrollToSection(sectionName){

    this.viewPortScroller.scrollToAnchor(sectionName);

  }

}
