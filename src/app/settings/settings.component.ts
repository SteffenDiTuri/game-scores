import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  isBracketDisabled = true; 

  constructor(private router: Router) {}

  goToTeamGenerator() {
    this.router.navigate(['/teamgenerator']);
  }
  goToBracketGenerator() {
    this.router.navigate(['/bracketgenerator']);
  }
}
