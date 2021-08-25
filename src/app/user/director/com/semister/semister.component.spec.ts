import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SemisterComponent } from './semister.component';

describe('SemisterComponent', () => {
  let component: SemisterComponent;
  let fixture: ComponentFixture<SemisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SemisterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
