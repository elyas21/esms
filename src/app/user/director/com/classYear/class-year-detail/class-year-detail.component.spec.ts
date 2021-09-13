import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassYearDetailComponent } from './class-year-detail.component';

describe('ClassYearDetailComponent', () => {
  let component: ClassYearDetailComponent;
  let fixture: ComponentFixture<ClassYearDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ClassYearDetailComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassYearDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
