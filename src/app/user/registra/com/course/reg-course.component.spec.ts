import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegCourseComponent } from './reg-course.component';

describe('RegCourseComponent', () => {
  let component: RegCourseComponent;
  let fixture: ComponentFixture<RegCourseComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RegCourseComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
