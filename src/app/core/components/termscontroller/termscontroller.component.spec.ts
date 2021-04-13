import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermscontrollerComponent } from './termscontroller.component';

describe('TermscontrollerComponent', () => {
  let component: TermscontrollerComponent;
  let fixture: ComponentFixture<TermscontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermscontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermscontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
