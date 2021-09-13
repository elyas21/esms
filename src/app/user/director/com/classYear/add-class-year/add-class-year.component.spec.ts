import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddClassYearComponent } from './add-class-year.component';

describe('AddClassYearComponent', () => {
  let component: AddClassYearComponent;
  let fixture: ComponentFixture<AddClassYearComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddClassYearComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
