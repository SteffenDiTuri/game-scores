import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamePerudoComponent } from './game-perudo/game-perudo.component';
import { PlayedGamesComponent } from './played-games/played-games.component';
import { GamesComponent } from './games/games.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamGeneratorComponent } from './team-generator/team-generator.component';
import { BracketGeneratorComponent } from './bracket-generator/bracket-generator.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'perudo', component: GamePerudoComponent },
  { path: 'playedgames', component: PlayedGamesComponent },
  { path: 'games', component: GamesComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'teamgenerator', component: TeamGeneratorComponent},
  { path: 'bracketgenerator', component: BracketGeneratorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
