import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAllCandStuComponent } from './view-all-cand-stu.component';

describe('ViewAllCandStuComponent', () => {
  let component: ViewAllCandStuComponent;
  let fixture: ComponentFixture<ViewAllCandStuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllCandStuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCandStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
