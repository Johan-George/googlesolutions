import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlockCodeComponent} from './components/block-code/block-code.component';
import { TestComponent } from './components/test/test.component';
import {LevelComponent} from './components/level/level.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { ProfilepagesComponent } from './components/profilepages/profilepages.component';

const routes: Routes = [
  {path: 'profile', component: ProfilepagesComponent},
  {path: 'code', component: BlockCodeComponent},
  {path: 'debug', component:TestComponent},
  {path: 'level', component: LevelComponent},
  {path: 'signin', component: SigninPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
