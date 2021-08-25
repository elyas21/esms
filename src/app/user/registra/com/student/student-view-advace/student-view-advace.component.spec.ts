import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { StudentViewAdvaceComponent } from './student-view-advace.component';

describe('StudentViewAdvaceComponent', () => {
  let component: StudentViewAdvaceComponent;
  let fixture: ComponentFixture<StudentViewAdvaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewAdvaceComponent],
      imports: [NoopAnimationsModule, MatPaginatorModule, MatSortModule, MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewAdvaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
