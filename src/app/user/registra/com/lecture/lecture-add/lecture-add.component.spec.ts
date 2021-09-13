import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LectureAddComponent } from './lecture-add.component';

describe('LectureAddComponent', () => {
  let component: LectureAddComponent;
  let fixture: ComponentFixture<LectureAddComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LectureAddComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
