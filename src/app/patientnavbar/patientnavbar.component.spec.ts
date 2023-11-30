import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientnavbarComponent } from './patientnavbar.component';

describe('PatientnavbarComponent', () => {
  let component: PatientnavbarComponent;
  let fixture: ComponentFixture<PatientnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientnavbarComponent]
    });
    fixture = TestBed.createComponent(PatientnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
