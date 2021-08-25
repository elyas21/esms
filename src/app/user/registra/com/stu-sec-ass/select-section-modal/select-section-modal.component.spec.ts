import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectSectionModalComponent } from './select-section-modal.component';

describe('SelectSectionModalComponent', () => {
  let component: SelectSectionModalComponent;
  let fixture: ComponentFixture<SelectSectionModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSectionModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
