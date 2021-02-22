import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidermanagercontrollerComponent } from './slidermanagercontroller.component';

describe('SlidermanagercontrollerComponent', () => {
  let component: SlidermanagercontrollerComponent;
  let fixture: ComponentFixture<SlidermanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidermanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidermanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
