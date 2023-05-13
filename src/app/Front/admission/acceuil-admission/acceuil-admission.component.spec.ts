import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilAdmissionComponent } from './acceuil-admission.component';

describe('AcceuilAdmissionComponent', () => {
  let component: AcceuilAdmissionComponent;
  let fixture: ComponentFixture<AcceuilAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
