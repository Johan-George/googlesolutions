import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { BlockCodeComponent } from './components/block-code/block-code.component';
import { ErrorComponent } from './components/error/error.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { TestComponent } from './components/test/test.component';
import { LevelComponent } from './components/level/level.component';
import { PageheaderComponent } from './components/pageheader/pageheader.component';
import { ProfilepagesComponent } from './components/profilepages/profilepages.component';

const firebaseConfig = {
  apiKey: "AIzaSyB25gxYu7PkMvnjKhisCzPP62grU_OEMLU",
  authDomain: "solutions2021-efce9.firebaseapp.com",
  projectId: "solutions2021-efce9",
  storageBucket: "solutions2021-efce9.appspot.com",
  messagingSenderId: "1033043841752",
  appId: "1:1033043841752:web:d1f78f6778f22f4d423dad"
};

@NgModule({
  declarations: [
    AppComponent,
    BlockCodeComponent,
    ErrorComponent,
    SigninPageComponent,
    TestComponent,
    LevelComponent,
    PageheaderComponent,
    ProfilepagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
