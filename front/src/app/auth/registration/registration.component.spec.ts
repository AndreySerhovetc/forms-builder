import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegistrationComponent } from './registration.component';
import { RegistrationModule } from './registration.module';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        RegistrationModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initializes registration module', () => {
    const module = TestBed.inject(RegistrationModule);
    expect(module).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.registForm.controls.email.setValue('');
    component.registForm.controls.password.setValue('');
    expect(component.registForm.valid).toBeFalsy();
  });

  it('password field should be required', () => {
    const password = component.registForm.controls.password;
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();
  });

  it('email field should be required', () => {
    const email = component.registForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('email field incorrect', () => {
    const email = component.registForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('test@');
    expect(email.valid).toBeFalsy();
  });

  it('Password lenght must be at least 6 characters', () => {
    const password = component.registForm.controls.password;
    expect(password.valid).toBeFalsy();

    password.setValue('1234');
    expect(password.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.registForm.controls.email.setValue('test@gmail.com');
    component.registForm.controls.password.setValue('123456');
    expect(component.registForm.valid).toBeTruthy();
  });
});
