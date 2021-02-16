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

  public AuthLogin() {
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
    .then((userCred) => {
      AuthyLoginService.user = userCred.user.uid;
      //this.router.navigate([""]);
      console.log("Logged in user " + AuthyLoginService.user);
    }).catch(error => {
      console.log("Could not login due to " + error);
    })
  }

  public logout() {
    AuthyLoginService.user = null;
    this.afAuth.signOut();
    console.log("user logout");
  }

}
