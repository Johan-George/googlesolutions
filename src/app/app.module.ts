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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { BlockCodeComponent } from './components/block-code/block-code.component';
import { ErrorComponent } from './components/error/error.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { TestComponent } from './components/test/test.component';
import { LevelComponent } from './components/level/level.component';
import { PageheaderComponent } from './components/pageheader/pageheader.component';
import { ProfilepagesComponent } from './components/profilepages/profilepages.component';
import {MatInputModule} from '@angular/material/input';
//import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';
import { DocsComponent } from './components/docs/docs.component';
import { LevelselectComponent } from './components/levelselect/levelselect.component';
import { SetNameComponent } from './components/set-name/set-name.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LevelplayComponent } from './components/levelplay/levelplay.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';

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
    ProfilepagesComponent,
    DocsComponent,
    LevelselectComponent,
    SetNameComponent,
    LevelplayComponent,
    InfoComponent
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

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
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
