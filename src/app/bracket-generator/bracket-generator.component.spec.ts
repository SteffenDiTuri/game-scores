import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketGeneratorComponent } from './bracket-generator.component';

describe('BracketGeneratorComponent', () => {
  let component: BracketGeneratorComponent;
  let fixture: ComponentFixture<BracketGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BracketGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
