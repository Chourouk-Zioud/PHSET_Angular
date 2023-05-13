import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseFAQComponent } from './reponse-faq.component';

describe('ReponseFAQComponent', () => {
  let component: ReponseFAQComponent;
  let fixture: ComponentFixture<ReponseFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
