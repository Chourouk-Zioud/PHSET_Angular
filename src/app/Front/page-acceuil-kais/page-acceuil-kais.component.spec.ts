import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAcceuilKaisComponent } from './page-acceuil-kais.component';

describe('PageAcceuilKaisComponent', () => {
  let component: PageAcceuilKaisComponent;
  let fixture: ComponentFixture<PageAcceuilKaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAcceuilKaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAcceuilKaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
