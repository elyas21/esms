import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraDetailComponent } from './registra-detail.component';

describe('RegistraDetailComponent', () => {
  let component: RegistraDetailComponent;
  let fixture: ComponentFixture<RegistraDetailComponent>;

  beforeEach(async(() => {
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
