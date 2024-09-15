import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-perudo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game-perudo.component.html',
  styleUrls: ['./game-perudo.component.css'] // Fixed `styleUrls` typo
})

export class GamePerudoComponent {
  scoreData: ScoreData = {}; // Initialize with the defined type
  numberOfRounds: number = 0; // Track the number of rounds
  showTable: boolean = false; // Control the visibility of the table
  players: any[] = [];
  selectedPlayers: any[] = [];
  rounds: any[] = [];
  gameEnded: boolean = false;
  winners: any[] = [];
  finalScores: { [key: string]: number } = {}; // Added finalScores to store scores

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getPlayers().subscribe(response => {
      this.players = response.data;
    });
  }

  checkValue(round: any, player: any) {
    if (round[player.name] < 0) {
      round[player.name] = 0; // Prevent negative values
    }
    if (round[player.name] > this.selectedPlayers.length) {
      round[player.name] = this.selectedPlayers.length; // Cap the value to the max number of players
    }
  }  

  onPlayerChange(event: any): void {
    const isChecked = event.target.checked;
    const playerName = event.target.value;

    if (isChecked) {
      this.selectedPlayers.push({ name: playerName });
    } else {
      this.selectedPlayers = this.selectedPlayers.filter(player => player.name !== playerName);
    }
  }

  // Method to add a new round
  addRound(): void {
    const newRound: { [key: string]: number } = {};
    this.selectedPlayers.forEach(player => newRound[player.name] = 0);
    this.rounds.push(newRound);
  }

  // Method to handle the "Ready" button click
  onReady(): void {
    this.showTable = true;
  }

  // Method to get player names
  getPlayerNames(): string[] {
    return this.players.map(player => player.name); // Ensure this matches the keys in scoreData
  }

  // Method to get round indices
  getRounds(): number[] {
    return Array.from({ length: this.numberOfRounds }, (_, index) => index);
  }

  endGame() {
    this.gameEnded = true;
    this.calculateScores();
    this.saveGame();
  }

  calculateScores() {
    this.finalScores = {}; // Initialize finalScores

    this.selectedPlayers.forEach(player => {
      this.finalScores[player.name] = 0; // Initialize player scores
    });

    this.rounds.forEach(round => {
      for (const playerName in round) {
        if (round.hasOwnProperty(playerName)) {
          this.finalScores[playerName] = (this.finalScores[playerName] || 0) + (round[playerName] || 0);
        }
      }
    });

    this.selectedPlayers.forEach(player => {
      player.score = this.finalScores[player.name] || 0;
    });

    // this.winner = this.selectedPlayers.reduce((prev, curr) => (prev.score > curr.score ? prev : curr), this.selectedPlayers[0]);
    // Find the maximum score
    const maxScore = Math.max(...this.selectedPlayers.map(player => player.score));

    // Find all players with the maximum score
    this.winners = this.selectedPlayers.filter(player => player.score === maxScore);

  }

  newGame() {
    window.location.reload();
  }

  gameMenu() {
    this.router.navigate(['/']); 
  }

  saveGame() {
    const eventName = 'Perudo'; // Set the event name as required
    const eventEntry = this.transformScoresToString();
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

  
    this.apiService.saveGame({ name: eventName, entry: eventEntry, date: currentDate }).subscribe(
      response => {
        console.log('Game saved successfully:', response);
        // Handle successful save (e.g., show a confirmation message to the user)
      },
      error => {
        console.error('Error saving game:', error);
        // Handle error (e.g., show an error message to the user)
      }
    );
  }
  
  // Method to transform finalScores into the required string format
  transformScoresToString(): string {
    // Create an array to hold individual player score strings
    const scoreStrings: string[] = [];
  
    // Iterate through finalScores to build each player's score string
    for (const playerName in this.finalScores) {
      if (this.finalScores.hasOwnProperty(playerName)) {
        // Push the player score string to the array
        scoreStrings.push(`${playerName}: ${this.finalScores[playerName]}`);
      }
    }
  
    // Join the player score strings with commas and wrap in <p> tags
    return `<p>${scoreStrings.join(', ')}</p>`;
  }
}

interface ScoreData {
  [playerName: string]: number[];
}
