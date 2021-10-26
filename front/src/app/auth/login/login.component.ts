import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth-service/auth.service';
import { TokenInterface } from 'src/app/shared/interfaces/token';
import { LoginModule } from './login.module';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;
  public currentErr = '';
  public successMsg = '';
  public fieldTextType: boolean = false;

  private destroyAll: Subject<any> = new Subject<any>();

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.loginService.error$
      .pipe(takeUntil(this.destroyAll))
      .subscribe((error) => (this.currentErr = error));

    this.loginService.success$
      .pipe(takeUntil(this.destroyAll))
      .subscribe((success) => (this.successMsg = success));

    this.loginForm.valueChanges
      .pipe(takeUntil(this.destroyAll))
      .subscribe(() => {
        if (this.currentErr.length) this.currentErr = '';
        if (this.successMsg.length) this.successMsg = '';
      });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = { ...this.loginForm.value };

      this.loginService.setUserData(formData);
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnDestroy(): void {
    this.destroyAll.next();
    this.destroyAll.complete();
  }
}
