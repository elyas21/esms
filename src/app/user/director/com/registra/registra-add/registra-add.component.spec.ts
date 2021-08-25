import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistraAddComponent } from './registra-add.component';

describe('RegistraAddComponent', () => {
  let component: RegistraAddComponent;
  let fixture: ComponentFixture<RegistraAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraAddComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
