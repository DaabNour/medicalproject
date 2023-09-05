import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryProfileComponent } from './secretary-profile.component';

describe('SecretaryProfileComponent', () => {
  let component: SecretaryProfileComponent;
  let fixture: ComponentFixture<SecretaryProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretaryProfileComponent]
    });
    fixture = TestBed.createComponent(SecretaryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
