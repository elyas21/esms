import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoSeLeAssComponent } from './co-se-le-ass.component';

describe('CoSeLeAssComponent', () => {
  let component: CoSeLeAssComponent;
  let fixture: ComponentFixture<CoSeLeAssComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CoSeLeAssComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSeLeAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
