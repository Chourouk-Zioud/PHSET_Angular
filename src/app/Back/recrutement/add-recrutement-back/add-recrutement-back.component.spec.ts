import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecrutementBackComponent } from './add-recrutement-back.component';

describe('AddRecrutementBackComponent', () => {
  let component: AddRecrutementBackComponent;
  let fixture: ComponentFixture<AddRecrutementBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecrutementBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecrutementBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
