import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseItemComponent } from './reponse-item.component';

describe('ReponseItemComponent', () => {
  let component: ReponseItemComponent;
  let fixture: ComponentFixture<ReponseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
