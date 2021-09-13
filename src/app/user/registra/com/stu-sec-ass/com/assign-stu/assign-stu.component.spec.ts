import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignStuComponent } from './assign-stu.component';

describe('AssignStuComponent', () => {
  let component: AssignStuComponent;
  let fixture: ComponentFixture<AssignStuComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AssignStuComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
