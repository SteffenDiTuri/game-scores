import { Component } from '@angular/core';
import { LastPlayedGamesComponent } from "../last-played-games/last-played-games.component";
import { TeamsComponent } from "../teams/teams.component";
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LastPlayedGamesComponent, GamesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
