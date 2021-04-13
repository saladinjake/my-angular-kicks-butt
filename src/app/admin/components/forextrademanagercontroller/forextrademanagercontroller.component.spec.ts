import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForextrademanagercontrollerComponent } from './forextrademanagercontroller.component';

describe('ForextrademanagercontrollerComponent', () => {
  let component: ForextrademanagercontrollerComponent;
  let fixture: ComponentFixture<ForextrademanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForextrademanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForextrademanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
