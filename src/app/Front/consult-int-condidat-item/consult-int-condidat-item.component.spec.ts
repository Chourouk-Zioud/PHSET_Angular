import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultIntCondidatItemComponent } from './consult-int-condidat-item.component';

describe('ConsultIntCondidatItemComponent', () => {
  let component: ConsultIntCondidatItemComponent;
  let fixture: ComponentFixture<ConsultIntCondidatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultIntCondidatItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultIntCondidatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
