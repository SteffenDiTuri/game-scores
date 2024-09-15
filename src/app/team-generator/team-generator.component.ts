import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.css'],
})
export class TeamGeneratorComponent {
  players: any[] = []; // List of players fetched from API
  selectedPlayers: any[] = []; // Selected players
  numberOfTeams: number = 0; // Number of teams to generate
  teams: any[][] = []; // Array of teams
  teamsGenerated: boolean = false; // Flag to indicate whether teams have been generated

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    // Fetch players from API
    this.apiService.getPlayers().subscribe((response) => {
      this.players = response.data;
    });
  }

  // Method to handle player selection
  onPlayerChange(event: any): void {
    const isChecked = event.target.checked;
    const playerName = event.target.value;

    if (isChecked) {
      this.selectedPlayers.push({ name: playerName });
    } else {
      this.selectedPlayers = this.selectedPlayers.filter(player => player.name !== playerName);
    }
  }

  // Method to generate teams based on selected players and number of teams
  generateTeams(): void {
    // Shuffle the selected players
    const shuffledPlayers = this.selectedPlayers.slice().sort(() => Math.random() - 0.5);

    // Initialize teams array
    this.teams = Array.from({ length: this.numberOfTeams }, () => []);

    // Distribute players among the teams
    shuffledPlayers.forEach((player, index) => {
      this.teams[index % this.numberOfTeams].push(player);
    });

    this.teamsGenerated = true;
  }

  // Method to regenerate teams with the same players and number of teams
  regenerateTeams(): void {
    this.generateTeams();
  }

  // Method to reselect players
  reselectPlayers(): void {
    this.teamsGenerated = false;
    this.selectedPlayers = [];
    this.numberOfTeams = 0;
  }
}
