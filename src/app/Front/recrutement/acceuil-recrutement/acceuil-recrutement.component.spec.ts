import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilRecrutementComponent } from './acceuil-recrutement.component';

describe('AcceuilRecrutementComponent', () => {
  let component: AcceuilRecrutementComponent;
  let fixture: ComponentFixture<AcceuilRecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilRecrutementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilRecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
