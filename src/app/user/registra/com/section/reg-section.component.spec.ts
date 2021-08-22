import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSectionComponent } from './reg-section.component';

describe('RegSectionComponent', () => {
  let component: RegSectionComponent;
  let fixture: ComponentFixture<RegSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegSectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
