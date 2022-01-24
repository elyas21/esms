import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyEventComponent } from './weekly-event.component';

describe('WeeklyEventComponent', () => {
  let component: WeeklyEventComponent;
  let fixture: ComponentFixture<WeeklyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
