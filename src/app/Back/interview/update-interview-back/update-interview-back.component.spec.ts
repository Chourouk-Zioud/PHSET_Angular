import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterviewBackComponent } from './update-interview-back.component';

describe('UpdateInterviewBackComponent', () => {
  let component: UpdateInterviewBackComponent;
  let fixture: ComponentFixture<UpdateInterviewBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInterviewBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInterviewBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
