import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryNavbarComponent } from './secretary-navbar.component';

describe('SecretaryNavbarComponent', () => {
  let component: SecretaryNavbarComponent;
  let fixture: ComponentFixture<SecretaryNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretaryNavbarComponent]
    });
    fixture = TestBed.createComponent(SecretaryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
