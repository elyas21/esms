import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassGradeComponent } from './class-grade.component';

describe('ClassGradeComponent', () => {
  let component: ClassGradeComponent;
  let fixture: ComponentFixture<ClassGradeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ClassGradeComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
