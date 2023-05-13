import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrainingComponent } from './top-training.component';

describe('TopTrainingComponent', () => {
  let component: TopTrainingComponent;
  let fixture: ComponentFixture<TopTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
