import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSemisterComponent } from './add-semister.component';

describe('AddSemisterComponent', () => {
  let component: AddSemisterComponent;
  let fixture: ComponentFixture<AddSemisterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddSemisterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSemisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
