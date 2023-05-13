import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTunNightComponent } from './add-tun-night.component';

describe('AddTunNightComponent', () => {
  let component: AddTunNightComponent;
  let fixture: ComponentFixture<AddTunNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTunNightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTunNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
