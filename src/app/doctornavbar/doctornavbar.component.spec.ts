import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctornavbarComponent } from './doctornavbar.component';

describe('DoctornavbarComponent', () => {
  let component: DoctornavbarComponent;
  let fixture: ComponentFixture<DoctornavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctornavbarComponent]
    });
    fixture = TestBed.createComponent(DoctornavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
