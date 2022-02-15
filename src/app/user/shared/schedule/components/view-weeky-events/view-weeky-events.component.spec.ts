import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeekyEventsComponent } from './view-weeky-events.component';

describe('ViewWeekyEventsComponent', () => {
  let component: ViewWeekyEventsComponent;
  let fixture: ComponentFixture<ViewWeekyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWeekyEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWeekyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
