import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GradeDetailComponent } from './grade-detail.component';

describe('GradeDetailComponent', () => {
  let component: GradeDetailComponent;
  let fixture: ComponentFixture<GradeDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GradeDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
