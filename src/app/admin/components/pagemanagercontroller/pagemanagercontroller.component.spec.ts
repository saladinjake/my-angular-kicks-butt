import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagemanagercontrollerComponent } from './pagemanagercontroller.component';

describe('PagemanagercontrollerComponent', () => {
  let component: PagemanagercontrollerComponent;
  let fixture: ComponentFixture<PagemanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagemanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagemanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
