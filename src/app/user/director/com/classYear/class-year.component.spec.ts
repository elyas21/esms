import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassYearComponent } from './class-year.component';

describe('ClassYearComponent', () => {
  let component: ClassYearComponent;
  let fixture: ComponentFixture<ClassYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassYearComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
