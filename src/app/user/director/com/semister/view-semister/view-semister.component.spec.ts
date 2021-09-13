import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewSemisterComponent } from './view-semister.component';

describe('ViewSemisterComponent', () => {
  let component: ViewSemisterComponent;
  let fixture: ComponentFixture<ViewSemisterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ViewSemisterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSemisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
