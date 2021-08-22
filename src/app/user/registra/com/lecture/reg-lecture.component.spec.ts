import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLectureComponent } from './reg-lecture.component';

describe('RegLectureComponent', () => {
  let component: RegLectureComponent;
  let fixture: ComponentFixture<RegLectureComponent>;

  beforeEach(async(() => {
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
