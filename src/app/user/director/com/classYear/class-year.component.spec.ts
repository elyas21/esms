import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassYearComponent } from './class-year.component';

describe('ClassYearComponent', () => {
  let component: ClassYearComponent;
  let fixture: ComponentFixture<ClassYearComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ClassYearComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
