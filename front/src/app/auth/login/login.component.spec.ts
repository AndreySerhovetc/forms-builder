import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        LoginModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initializes login module', () => {
    const module = TestBed.inject(LoginModule);
    expect(module).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.loginForm.controls.email.setValue('');
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('passoword field should be required', () => {
    const password = component.loginForm.controls.password;
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();
  });

  it('Password length must be at least 6 characters', () => {
    const password = component.loginForm.controls.email;
    expect(password.valid).toBeFalsy();

    password.setValue('1234');
    expect(password.valid).toBeFalsy();
  });

  it('email field should be required', () => {
    const email = component.loginForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('email field incorrect', () => {
    const email = component.loginForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('test@');
    expect(email.valid).toBeFalsy();
  });


  // it('Should be call onSubmit method', fakeAsync(() => {
  //   fixture.detectChanges();
  //   spyOn(component, 'onSubmit');
  //   let el = fixture.debugElement.query(By.css('btn')).nativeElement;
  //   el.click();
  //   tick();
  //   expect(component.onSubmit).toHaveBeenCalled();
  // }));

  it('form should be valid', () => {
    component.loginForm.controls.email.setValue('test@uuu.com');
    component.loginForm.controls.password.setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });
});
