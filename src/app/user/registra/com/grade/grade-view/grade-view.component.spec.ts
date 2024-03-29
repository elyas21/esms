import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GradeViewComponent } from './grade-view.component';

describe('GradeViewComponent', () => {
  let component: GradeViewComponent;
  let fixture: ComponentFixture<GradeViewComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GradeViewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
