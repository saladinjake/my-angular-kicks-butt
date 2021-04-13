import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentgatewaymanagercontrollerComponent } from './paymentgatewaymanagercontroller.component';

describe('PaymentgatewaymanagercontrollerComponent', () => {
  let component: PaymentgatewaymanagercontrollerComponent;
  let fixture: ComponentFixture<PaymentgatewaymanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentgatewaymanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentgatewaymanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
