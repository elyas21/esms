import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegLectureComponent } from './reg-lecture.component';

describe('RegLectureComponent', () => {
  let component: RegLectureComponent;
  let fixture: ComponentFixture<RegLectureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegLectureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
