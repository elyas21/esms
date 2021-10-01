import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSudoEventComponent } from './update-sudo-event.component';

describe('UpdateSudoEventComponent', () => {
  let component: UpdateSudoEventComponent;
  let fixture: ComponentFixture<UpdateSudoEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSudoEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSudoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
