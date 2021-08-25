import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SemisterDetailComponent } from './semister-detail.component';

describe('SemisterDetailComponent', () => {
  let component: SemisterDetailComponent;
  let fixture: ComponentFixture<SemisterDetailComponent>;

  beforeEach(waitForAsync(() => {
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
