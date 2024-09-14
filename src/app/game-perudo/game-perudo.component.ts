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
  styleUrl: './game-perudo.component.css'
})

export class GamePerudoComponent {
  scoreData: ScoreData = {}; // Initialize with the defined type
  numberOfRounds: number = 0; // Track the number of rounds
  showTable: boolean = false; // Control the visibility of the table
  players: any[] = [];
  selectedPlayers: any[] = [];
  rounds: any[] = [];
  gameEnded: any;
  winner: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getPlayers().subscribe(response => {
      this.players = response.data;
    });
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

  saveScores(){

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
    return this.players; // Ensure this matches the keys in scoreData
  }

  // Method to get round indices
  getRounds(): number[] {
    return Array.from({ length: this.numberOfRounds }, (_, index) => index);
  }

  endGame() {
    this.gameEnded = true;
    this.calculateScores();
  }

  calculateScores() {
    const finalScores: { [key: string]: number } = {};

    this.selectedPlayers.forEach(player => {
      finalScores[player.name] = 0; // Initialize player scores
    });

    this.rounds.forEach(round => {
      for (const playerName in round) {
        if (round.hasOwnProperty(playerName)) {
          finalScores[playerName] = (finalScores[playerName] || 0) + (round[playerName] || 0);
        }
      }
    });

    this.selectedPlayers.forEach(player => {
      player.score = finalScores[player.name] || 0;
    });

    this.winner = this.selectedPlayers.reduce((prev, curr) => (prev.score > curr.score ? prev : curr), this.selectedPlayers[0]);
  }

  newGame() {
    window.location.reload();
  }

  gameMenu() {
    this.router.navigate(['/']); 
  }
}

interface ScoreData {
  [playerName: string]: number[];
}