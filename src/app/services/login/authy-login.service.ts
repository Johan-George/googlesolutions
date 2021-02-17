import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthyLoginService {

  static user: string = null;

  constructor(public afAuth: AngularFireAuth, public router: Router) {  }

  public AuthLogin(route: string) {
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
    .then((userCred) => {
      AuthyLoginService.user = userCred.user.uid;
      this.router.navigate([route]);
      console.log("Logged in user " + AuthyLoginService.user);
    }).catch(error => {
      console.log("Could not login due to " + error);
    })
  }

  public logout() {
    this.afAuth.signOut().then(() => {
      AuthyLoginService.user = null;
      console.log("User signout");
      this.router.navigate([""]);
    });
  }

}
