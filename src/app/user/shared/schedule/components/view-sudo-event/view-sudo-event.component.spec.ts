import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSudoEventComponent } from './view-sudo-event.component';

describe('ViewSudoEventComponent', () => {
  let component: ViewSudoEventComponent;
  let fixture: ComponentFixture<ViewSudoEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSudoEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSudoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
