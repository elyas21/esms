import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistraDetailComponent } from './registra-detail.component';

describe('RegistraDetailComponent', () => {
  let component: RegistraDetailComponent;
  let fixture: ComponentFixture<RegistraDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
