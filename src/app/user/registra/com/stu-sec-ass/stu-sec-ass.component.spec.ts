import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StuSecAssComponent } from './stu-sec-ass.component';

describe('StuSecAssComponent', () => {
  let component: StuSecAssComponent;
  let fixture: ComponentFixture<StuSecAssComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StuSecAssComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StuSecAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
