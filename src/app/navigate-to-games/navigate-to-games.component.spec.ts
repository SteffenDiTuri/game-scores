import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateToGamesComponent } from './navigate-to-games.component';

describe('NavigateToGamesComponent', () => {
  let component: NavigateToGamesComponent;
  let fixture: ComponentFixture<NavigateToGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateToGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateToGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
