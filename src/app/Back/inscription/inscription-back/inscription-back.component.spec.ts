import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionBackComponent } from './inscription-back.component';

describe('InscriptionBackComponent', () => {
  let component: InscriptionBackComponent;
  let fixture: ComponentFixture<InscriptionBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
