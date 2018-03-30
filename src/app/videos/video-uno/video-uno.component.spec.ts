import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUnoComponent } from './video-uno.component';

describe('VideoUnoComponent', () => {
  let component: VideoUnoComponent;
  let fixture: ComponentFixture<VideoUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
