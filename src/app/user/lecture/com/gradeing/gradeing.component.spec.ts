import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GradeingComponent } from './gradeing.component';

describe('GradeingComponent', () => {
  let component: GradeingComponent;
  let fixture: ComponentFixture<GradeingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GradeingComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
