import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewBackComponent } from './interview-back.component';

describe('InterviewBackComponent', () => {
  let component: InterviewBackComponent;
  let fixture: ComponentFixture<InterviewBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
