import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterviewBackComponent } from './add-interview-back.component';

describe('AddInterviewBackComponent', () => {
  let component: AddInterviewBackComponent;
  let fixture: ComponentFixture<AddInterviewBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInterviewBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInterviewBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
