import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateEventComponent } from './populate-event.component';

describe('PopulateEventComponent', () => {
  let component: PopulateEventComponent;
  let fixture: ComponentFixture<PopulateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulateEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
