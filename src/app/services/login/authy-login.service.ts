import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthyLoginService {

  //See docs for user at https://firebase.google.com/docs/reference/js/firebase.User
  private static user: firebase.default.User = null;

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  public AuthLogin(route: string) {
    if (AuthyLoginService.user == null) {
      this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
        .then((userCred) => {
          AuthyLoginService.user = userCred.user;
          this.router.navigate([route]);
          console.log("Logged in user " + AuthyLoginService.user.displayName);
        }).catch(error => {
          console.log("Could not login due to " + error);
        });
    } else {
      this.router.navigate([route]);
    }
  }

  public logout() {
    this.afAuth.signOut().then(() => {
      AuthyLoginService.user = null;
      console.log("User signout");
      this.router.navigate([""]);
    });
  }

  public getUser() {
    return AuthyLoginService.user;
  }

}
