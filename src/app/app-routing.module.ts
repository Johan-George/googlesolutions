import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlockCodeComponent} from './components/block-code/block-code.component';
import { TestComponent } from './components/test/test.component';
import {LevelComponent} from './components/level/level.component';

const routes: Routes = [
  {path: 'code', component: BlockCodeComponent},
  {path: 'debug', component:TestComponent},
  {path: 'level', component: LevelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
