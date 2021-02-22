import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwalletmanagercontrollerComponent } from './userwalletmanagercontroller.component';

describe('UserwalletmanagercontrollerComponent', () => {
  let component: UserwalletmanagercontrollerComponent;
  let fixture: ComponentFixture<UserwalletmanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwalletmanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwalletmanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
