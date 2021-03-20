import { Component } from '@angular/core';
import {AuthyLoginService} from './services/login/authy-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googlesolutions';


  constructor(public auth: AuthyLoginService) {}
}
