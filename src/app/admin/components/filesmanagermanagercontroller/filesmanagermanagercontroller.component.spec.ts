import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesmanagermanagercontrollerComponent } from './filesmanagermanagercontroller.component';

describe('FilesmanagermanagercontrollerComponent', () => {
  let component: FilesmanagermanagercontrollerComponent;
  let fixture: ComponentFixture<FilesmanagermanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesmanagermanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesmanagermanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
