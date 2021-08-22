import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassYearDetailComponent } from './class-year-detail.component';

describe('ClassYearDetailComponent', () => {
  let component: ClassYearDetailComponent;
  let fixture: ComponentFixture<ClassYearDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassYearDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassYearDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
