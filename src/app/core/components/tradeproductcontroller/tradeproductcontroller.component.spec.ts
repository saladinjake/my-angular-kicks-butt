import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeproductcontrollerComponent } from './tradeproductcontroller.component';

describe('TradeproductcontrollerComponent', () => {
  let component: TradeproductcontrollerComponent;
  let fixture: ComponentFixture<TradeproductcontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeproductcontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeproductcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
