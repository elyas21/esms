import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GradeAddComponent } from './grade-add.component';

describe('GradeAddComponent', () => {
  let component: GradeAddComponent;
  let fixture: ComponentFixture<GradeAddComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GradeAddComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
