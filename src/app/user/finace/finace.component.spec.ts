import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FinaceComponent } from './finace.component';

describe('FinaceComponent', () => {
  let component: FinaceComponent;
  let fixture: ComponentFixture<FinaceComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FinaceComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
