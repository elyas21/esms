import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolViewDetialComponent } from './school-view-detial.component';

describe('SchoolViewDetialComponent', () => {
  let component: SchoolViewDetialComponent;
  let fixture: ComponentFixture<SchoolViewDetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolViewDetialComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolViewDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
