import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTresComponent } from './video-tres.component';

describe('VideoTresComponent', () => {
  let component: VideoTresComponent;
  let fixture: ComponentFixture<VideoTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
