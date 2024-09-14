import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-to-games',
  standalone: true,
  imports: [],
  templateUrl: './navigate-to-games.component.html',
  styleUrl: './navigate-to-games.component.css'
})
export class NavigateToGamesComponent {
  constructor(private router: Router) {}

  goToPlayedGames() {
    this.router.navigate(['/played-games']);
  }
}
