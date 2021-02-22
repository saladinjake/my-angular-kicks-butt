import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForummanagercontrollerComponent } from './forummanagercontroller.component';

describe('ForummanagercontrollerComponent', () => {
  let component: ForummanagercontrollerComponent;
  let fixture: ComponentFixture<ForummanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForummanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForummanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
