import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth-service/auth.service';
import { TokenInterface } from 'src/app/shared/interfaces/token';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;

  public currentErr = '';

  public successMsg = '';

  public fieldTextType: boolean = false;

  public loginUserData = {
    email: '',
    password: '',
  };

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.loginForm.valueChanges
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        if (this.currentErr.length) this.currentErr = '';
        if (this.successMsg.length) this.successMsg = '';
      });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = { ...this.loginForm.value };

      this.loginUserData.email = formData.email;
      this.loginUserData.password = formData.password;

      this.loginUser();
    }
  }

  loginUser(): void {
    this.auth
      .loginUser(this.loginUserData)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(
        (res: TokenInterface) => {
          localStorage.setItem('token', res.token!);
          this.successMsg = 'You successful logged in';
          this.route.navigate(['']);
        },
        (err) => {
          this.loginForm.get('password')?.setValue('');
          this.currentErr = err.error;
        },
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
