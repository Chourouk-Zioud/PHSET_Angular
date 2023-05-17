import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseBackComponent } from './add-course-back.component';

describe('AddCourseBackComponent', () => {
  let component: AddCourseBackComponent;
  let fixture: ComponentFixture<AddCourseBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
