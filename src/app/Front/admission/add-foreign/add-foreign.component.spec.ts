import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForeignComponent } from './add-foreign.component';

describe('AddForeignComponent', () => {
  let component: AddForeignComponent;
  let fixture: ComponentFixture<AddForeignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForeignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForeignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
