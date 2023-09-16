import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalrecordListComponent } from './medicalrecord-list.component';

describe('MedicalrecordListComponent', () => {
  let component: MedicalrecordListComponent;
  let fixture: ComponentFixture<MedicalrecordListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalrecordListComponent]
    });
    fixture = TestBed.createComponent(MedicalrecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
