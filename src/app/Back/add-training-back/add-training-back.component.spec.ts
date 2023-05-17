import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingBackComponent } from './add-training-back.component';

describe('AddTrainingBackComponent', () => {
  let component: AddTrainingBackComponent;
  let fixture: ComponentFixture<AddTrainingBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainingBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
