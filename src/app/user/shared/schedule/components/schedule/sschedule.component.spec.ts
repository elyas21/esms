import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SScheduleComponent } from './schedule.component';

describe('SScheduleComponent', () => {
  let component: SScheduleComponent;
  let fixture: ComponentFixture<SScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
