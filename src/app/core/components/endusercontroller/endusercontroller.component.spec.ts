import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndusercontrollerComponent } from './endusercontroller.component';

describe('EndusercontrollerComponent', () => {
  let component: EndusercontrollerComponent;
  let fixture: ComponentFixture<EndusercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndusercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndusercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
