import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeeklyEventModalComponent } from './add-weekly-event-modal.component';

describe('AddWeeklyEventModalComponent', () => {
  let component: AddWeeklyEventModalComponent;
  let fixture: ComponentFixture<AddWeeklyEventModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWeeklyEventModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeeklyEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
