import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreExamenComponent } from './centre-examen.component';

describe('CentreExamenComponent', () => {
  let component: CentreExamenComponent;
  let fixture: ComponentFixture<CentreExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
