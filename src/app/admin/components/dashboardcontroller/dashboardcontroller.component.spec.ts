import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcontrollerComponent } from './dashboardcontroller.component';

describe('DashboardcontrollerComponent', () => {
  let component: DashboardcontrollerComponent;
  let fixture: ComponentFixture<DashboardcontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
