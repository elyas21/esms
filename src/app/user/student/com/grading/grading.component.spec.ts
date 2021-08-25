import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StuGradingComponent } from './grading.component';

describe('GradingComponent', () => {
  let component: StuGradingComponent;
  let fixture: ComponentFixture<StuGradingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StuGradingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
