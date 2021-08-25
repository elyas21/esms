import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegGradeComponent } from './reg-grade.component';

describe('RegGradeComponent', () => {
  let component: RegGradeComponent;
  let fixture: ComponentFixture<RegGradeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegGradeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
