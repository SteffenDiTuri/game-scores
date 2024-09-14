import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamePerudoComponent } from './game-perudo/game-perudo.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'perudo', component: GamePerudoComponent } // Route for game details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
