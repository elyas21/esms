import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegStudentComponent } from './reg-student.component';

describe('RegStudentComponent', () => {
  let component: RegStudentComponent;
  let fixture: ComponentFixture<RegStudentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RegStudentComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
