import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmanagercontrollerComponent } from './accountmanagercontroller.component';

describe('AccountmanagercontrollerComponent', () => {
  let component: AccountmanagercontrollerComponent;
  let fixture: ComponentFixture<AccountmanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountmanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountmanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
