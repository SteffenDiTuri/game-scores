import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GameComponent } from "../game/game.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GameComponent, CommonModule, RouterModule],  // Add imports if using other components
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any[] = [];
  error: string | null = null;


  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.apiService.getGames().subscribe(
      (data: any) => {
        this.games = data.data;  // Adjust based on your API response structure
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }
}

