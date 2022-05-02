import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcallBackComponent } from './gcall-back.component';

describe('GcallBackComponent', () => {
  let component: GcallBackComponent;
  let fixture: ComponentFixture<GcallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcallBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
