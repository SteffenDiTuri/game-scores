import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamePerudoComponent } from './game-perudo/game-perudo.component';
import { PlayedGamesComponent } from './played-games/played-games.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'perudo', component: GamePerudoComponent }, // Route for game details
  { path: 'played-games', component: PlayedGamesComponent } // Add route for played games
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
