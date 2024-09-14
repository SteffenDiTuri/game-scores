import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcistingTeamComponent } from './excisting-team.component';

describe('ExcistingTeamComponent', () => {
  let component: ExcistingTeamComponent;
  let fixture: ComponentFixture<ExcistingTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcistingTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcistingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
