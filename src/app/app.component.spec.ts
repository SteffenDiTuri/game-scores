import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LastPlayedGamesComponent } from './last-played-games/last-played-games.component';
import { TeamsComponent } from './teams/teams.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent, 
        LastPlayedGamesComponent,
        TeamsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
