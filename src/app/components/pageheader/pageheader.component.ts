import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthyLoginService } from 'src/app/services/login/authy-login.service';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent {

  loggedIn: boolean = false;
  username: string = "";

  constructor(private auth: AuthyLoginService, private router: Router) { 
    this.loggedIn = this.auth.checkSigninStatus();
    
    if(this.loggedIn) {
      this.username = this.auth.getUser().authDisplayName;
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate([""]);
  }

}
