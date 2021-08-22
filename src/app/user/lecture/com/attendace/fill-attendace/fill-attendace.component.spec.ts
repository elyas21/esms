import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAttendaceComponent } from './fill-attendace.component';

describe('FillAttendaceComponent', () => {
  let component: FillAttendaceComponent;
  let fixture: ComponentFixture<FillAttendaceComponent>;

  beforeEach(async(() => {
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
