import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-played-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './played-games.component.html',
  styleUrls: ['./played-games.component.css']
})
export class PlayedGamesComponent implements OnInit {
  games: any[] = []; // Replace with your specific type

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPlayedGames().subscribe(
      (data: any) => {
        this.games = data.data;  // Adjust based on your API response structure
        // Process the entry to extract and format the scores after data is fetched
        this.games = this.games.map(game => ({
          ...game,
          entry: this.processEntry(game.entry)
        }));
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }

  processEntry(entry: string): { name: string, score: number }[] {
    // Remove HTML tags
    const text = entry.replace(/<\/?[^>]+(>|$)/g, "");

    // Split the string by commas to get name-score pairs
    const pairs = text.split(',').map(pair => pair.trim());

    // Convert pairs to an array of objects with name and score
    const result: { name: string, score: number }[] = pairs.map(pair => {
      const [name, score] = pair.split(':').map(part => part.trim());
      return { name, score: parseInt(score, 10) };
    });
    // Sort the result array by score in descending order
    result.sort((a, b) => b.score - a.score);
    return result;
  }
}
