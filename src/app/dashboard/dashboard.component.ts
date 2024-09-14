import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";
import { NavigateToGamesComponent } from "../navigate-to-games/navigate-to-games.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GamesComponent, NavigateToGamesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
