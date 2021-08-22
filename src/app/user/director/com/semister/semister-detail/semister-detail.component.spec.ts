import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemisterDetailComponent } from './semister-detail.component';

describe('SemisterDetailComponent', () => {
  let component: SemisterDetailComponent;
  let fixture: ComponentFixture<SemisterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SemisterDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemisterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
