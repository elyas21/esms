import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraViewComponent } from './registra-view.component';

describe('RegistraViewComponent', () => {
  let component: RegistraViewComponent;
  let fixture: ComponentFixture<RegistraViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
