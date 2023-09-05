import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalrecordComponent } from './add-medicalrecord.component';

describe('AddMedicalrecordComponent', () => {
  let component: AddMedicalrecordComponent;
  let fixture: ComponentFixture<AddMedicalrecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMedicalrecordComponent]
    });
    fixture = TestBed.createComponent(AddMedicalrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
