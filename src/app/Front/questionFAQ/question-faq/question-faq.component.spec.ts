import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFAQComponent } from './question-faq.component';

describe('QuestionFAQComponent', () => {
  let component: QuestionFAQComponent;
  let fixture: ComponentFixture<QuestionFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
