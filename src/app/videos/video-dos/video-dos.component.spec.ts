import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDosComponent } from './video-dos.component';

describe('VideoDosComponent', () => {
  let component: VideoDosComponent;
  let fixture: ComponentFixture<VideoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
