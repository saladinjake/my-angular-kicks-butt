import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertransactionmanagercontrollerComponent } from './usertransactionmanagercontroller.component';

describe('UsertransactionmanagercontrollerComponent', () => {
  let component: UsertransactionmanagercontrollerComponent;
  let fixture: ComponentFixture<UsertransactionmanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertransactionmanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertransactionmanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
