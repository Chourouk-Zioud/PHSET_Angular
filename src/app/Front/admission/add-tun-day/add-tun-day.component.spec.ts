import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTunDayComponent } from './add-tun-day.component';

describe('AddTunDayComponent', () => {
  let component: AddTunDayComponent;
  let fixture: ComponentFixture<AddTunDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTunDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTunDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
