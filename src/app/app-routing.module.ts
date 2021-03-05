import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlockCodeComponent} from './components/block-code/block-code.component';
import { TestComponent } from './components/test/test.component';
import {LevelComponent} from './components/level/level.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { ProfilepagesComponent } from './components/profilepages/profilepages.component';
import { LevelselectComponent } from './components/levelselect/levelselect.component';

const routes: Routes = [
  {path: 'signin', component: SigninPageComponent},
  {path: 'profile', component: ProfilepagesComponent},
  {path: 'code', component: BlockCodeComponent},
  {path: 'levelSelect', component:LevelselectComponent},
  {path: 'tutorials', component:LevelselectComponent},
  {path: 'level', component: LevelComponent},
  {path: 'debug', component:TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
