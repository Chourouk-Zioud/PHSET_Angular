import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAdmissionComponent } from './top-admission.component';

describe('TopAdmissionComponent', () => {
  let component: TopAdmissionComponent;
  let fixture: ComponentFixture<TopAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
