import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatexpandedComponent } from './chatexpanded.component';

describe('ChatexpandedComponent', () => {
  let component: ChatexpandedComponent;
  let fixture: ComponentFixture<ChatexpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatexpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatexpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
