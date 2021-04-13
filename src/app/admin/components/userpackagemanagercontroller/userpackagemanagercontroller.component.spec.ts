import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpackagemanagercontrollerComponent } from './userpackagemanagercontroller.component';

describe('UserpackagemanagercontrollerComponent', () => {
  let component: UserpackagemanagercontrollerComponent;
  let fixture: ComponentFixture<UserpackagemanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpackagemanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpackagemanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
