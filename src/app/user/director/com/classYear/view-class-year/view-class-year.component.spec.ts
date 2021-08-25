import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewClassYearComponent } from './view-class-year.component';

describe('ViewClassYearComponent', () => {
  let component: ViewClassYearComponent;
  let fixture: ComponentFixture<ViewClassYearComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ViewClassYearComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
