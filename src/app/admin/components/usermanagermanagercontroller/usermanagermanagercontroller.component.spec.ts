import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagermanagercontrollerComponent } from './usermanagermanagercontroller.component';

describe('UsermanagermanagercontrollerComponent', () => {
  let component: UsermanagermanagercontrollerComponent;
  let fixture: ComponentFixture<UsermanagermanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagermanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagermanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
