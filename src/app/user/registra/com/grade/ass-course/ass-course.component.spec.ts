import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssCourseComponent } from './ass-course.component';

describe('AssCourseComponent', () => {
  let component: AssCourseComponent;
  let fixture: ComponentFixture<AssCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AssCourseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
