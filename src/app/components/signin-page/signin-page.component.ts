import { Component } from '@angular/core';
import { AuthyLoginService } from 'src/app/services/login/authy-login.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent {

  //Page Path to go to after log in successful
  routeToAfterLogin: string;

  constructor(private authyService: AuthyLoginService) { }

  loginUser() {
    this.authyService.AuthLogin(this.routeToAfterLogin);
  }
}
