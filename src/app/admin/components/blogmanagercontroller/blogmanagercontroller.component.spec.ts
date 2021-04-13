import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogmanagercontrollerComponent } from './blogmanagercontroller.component';

describe('BlogmanagercontrollerComponent', () => {
  let component: BlogmanagercontrollerComponent;
  let fixture: ComponentFixture<BlogmanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogmanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogmanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
