import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsmanagercontrollerComponent } from './settingsmanagercontroller.component';

describe('SettingsmanagercontrollerComponent', () => {
  let component: SettingsmanagercontrollerComponent;
  let fixture: ComponentFixture<SettingsmanagercontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsmanagercontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsmanagercontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
