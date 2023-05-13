import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementItemBackComponent } from './recrutement-item-back.component';

describe('RecrutementItemBackComponent', () => {
  let component: RecrutementItemBackComponent;
  let fixture: ComponentFixture<RecrutementItemBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrutementItemBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrutementItemBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
