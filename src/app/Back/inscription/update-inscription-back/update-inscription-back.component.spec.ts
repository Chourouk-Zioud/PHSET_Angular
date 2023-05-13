import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInscriptionBackComponent } from './update-inscription-back.component';

describe('UpdateInscriptionBackComponent', () => {
  let component: UpdateInscriptionBackComponent;
  let fixture: ComponentFixture<UpdateInscriptionBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInscriptionBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInscriptionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
