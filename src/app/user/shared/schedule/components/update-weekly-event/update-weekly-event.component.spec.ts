import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWeeklyEventComponent } from './update-weekly-event.component';

describe('UpdateWeeklyEventComponent', () => {
  let component: UpdateWeeklyEventComponent;
  let fixture: ComponentFixture<UpdateWeeklyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWeeklyEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWeeklyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
