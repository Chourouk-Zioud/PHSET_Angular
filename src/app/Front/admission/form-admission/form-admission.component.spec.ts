import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdmissionComponent } from './form-admission.component';

describe('FormAdmissionComponent', () => {
  let component: FormAdmissionComponent;
  let fixture: ComponentFixture<FormAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
