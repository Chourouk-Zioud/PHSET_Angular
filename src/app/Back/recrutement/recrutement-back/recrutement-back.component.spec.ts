import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementBackComponent } from './recrutement-back.component';

describe('RecrutementBackComponent', () => {
  let component: RecrutementBackComponent;
  let fixture: ComponentFixture<RecrutementBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrutementBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrutementBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
