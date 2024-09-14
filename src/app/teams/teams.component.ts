import { Component, OnInit } from '@angular/core';
import { ExcistingTeamComponent } from "../excisting-team/excisting-team.component";
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [ExcistingTeamComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnInit{
  campaignId: string | null = null;
  teams: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      {
        // Fetch characters for the campaign
        this.apiService.getTeams()
          .subscribe(
            (teams) => {
              this.teams = teams.data;
              console.log('Teams:', teams);
            },
            (error) => {
              console.error('Error fetching teams:', error);
            }
          );
      }
    });
  }
}
