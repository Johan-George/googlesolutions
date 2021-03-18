import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlockCodeComponent} from './components/block-code/block-code.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { ProfilepagesComponent } from './components/profilepages/profilepages.component';
import {DocsComponent} from './components/docs/docs.component';
import { LevelselectComponent } from './components/levelselect/levelselect.component';
import { LevelplayComponent } from './components/levelplay/levelplay.component';
import { HomeComponent } from './components/home/home.component';
import {LevelComponent} from './components/level/level.component';
import {JavascriptGuideComponent} from './components/javascript-guide/javascript-guide.component';

const routes: Routes = [
  {path: 'signin', component: SigninPageComponent},
  {path: 'profile', component: ProfilepagesComponent},
  {path: 'code', component: BlockCodeComponent},
  {path: 'levelSelect', component:LevelselectComponent},
  {path: 'tutorials', component:LevelselectComponent},
  {path: 'play', component: LevelplayComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'level', component: LevelComponent},
  {path: '', component: HomeComponent},
  {path: 'learn-js', component: JavascriptGuideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
