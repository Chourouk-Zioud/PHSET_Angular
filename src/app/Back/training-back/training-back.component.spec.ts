import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingBackComponent } from './training-back.component';

describe('TrainingBackComponent', () => {
  let component: TrainingBackComponent;
  let fixture: ComponentFixture<TrainingBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
