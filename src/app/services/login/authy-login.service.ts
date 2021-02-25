import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthyLoginService {

  private static SESSION_STORAGE_USER_ID: string = "ScriptSAuthCred";

  //See docs for user at https://firebase.google.com/docs/reference/js/firebase.User
  private static user: UserInfo = null;

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  public checkSigninStatus(route: string) {
    if(AuthyLoginService.user == null) {
      
      var sessionData = sessionStorage.getItem(AuthyLoginService.SESSION_STORAGE_USER_ID);
      if (sessionData != null) {

        AuthyLoginService.user = JSON.parse(sessionData);
        return true;

      } else {
        return false;
      }

    } else {
      return true;
    }
  }

  public AuthLogin(route: string) {
    if (AuthyLoginService.user == null) {

      //check for session
      var sessionData = sessionStorage.getItem(AuthyLoginService.SESSION_STORAGE_USER_ID);
      if (sessionData != null) {

        AuthyLoginService.user = JSON.parse(sessionData);
        this.router.navigate([route]);

      } else {

        this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
          .then((userCred) => {

            AuthyLoginService.user = new UserInfo();
            AuthyLoginService.user.uid = userCred.user.uid;
            AuthyLoginService.user.authDisplayName = userCred.user.displayName;

            sessionStorage.setItem(AuthyLoginService.SESSION_STORAGE_USER_ID, JSON.stringify(AuthyLoginService.user));

            this.router.navigate([route]);

            console.log("Logged in user " + AuthyLoginService.user.authDisplayName);

          }).catch(error => {
            console.log("Could not login due to " + error);
          });

      }

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

export class UserInfo {
  authDisplayName: string
  uid: string
}
