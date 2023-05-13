import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBackComponent } from './exam-back.component';

describe('ExamBackComponent', () => {
  let component: ExamBackComponent;
  let fixture: ComponentFixture<ExamBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
