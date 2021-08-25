import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FillAttendaceComponent } from './fill-attendace.component';

describe('FillAttendaceComponent', () => {
  let component: FillAttendaceComponent;
  let fixture: ComponentFixture<FillAttendaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FillAttendaceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillAttendaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
