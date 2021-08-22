import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraAddComponent } from './registra-add.component';

describe('RegistraAddComponent', () => {
  let component: RegistraAddComponent;
  let fixture: ComponentFixture<RegistraAddComponent>;

  beforeEach(async(() => {
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
