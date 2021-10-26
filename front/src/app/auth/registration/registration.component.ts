import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth-service/auth.service';
import { TokenInterface } from 'src/app/shared/interfaces/token';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  public registForm!: FormGroup;

  public successMsg = '';

  public errorMsg = '';

  public fieldTextType: boolean = false;

  public registerUserData = {
    email: '',
    password: '',
  };

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.registForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.registForm.valueChanges
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        if (this.errorMsg.length) this.errorMsg = '';
      });
  }

  onSubmit(): void {
    if (this.registForm.valid) {
      const formData = { ...this.registForm.value };

      this.registerUserData.email = formData.email;
      this.registerUserData.password = formData.password;

      this.registerUser();
    }
  }

  registerUser(): void {
    this.auth
      .registerUser(this.registerUserData)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(
        (res: TokenInterface) => {
          localStorage.setItem('token', res.token!);
          this.successMsg = 'Registration successful';
          this.registForm.reset();
          this.route.navigate(['']);
        },
        (error) => (this.errorMsg = error.error),
      );
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
