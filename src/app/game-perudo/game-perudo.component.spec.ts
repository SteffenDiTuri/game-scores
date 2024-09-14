import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePerudoComponent } from './game-perudo.component';

describe('GamePerudoComponent', () => {
  let component: GamePerudoComponent;
  let fixture: ComponentFixture<GamePerudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePerudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamePerudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
