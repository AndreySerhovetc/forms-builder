import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TokenInterface } from 'src/app/shared/interfaces/token';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';


@Injectable({
  providedIn: 'root',
})

export class RegistrationService {
  public error$ = new Subject<string>();
  public success$ = new Subject<string>();
  public registerUserData = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  setUserData(registerData: { email: string; password: string }): void {
    this.registerUserData.email = registerData.email;
    this.registerUserData.password = registerData.password;

    this.registerUser();
  }

  registerUser(): void {
    this.auth.registerUser(this.registerUserData).subscribe(
      (res: TokenInterface) => {
        localStorage.setItem('token', res.token!);
        this.success$.next('Registration successful');
        this.router.navigate(['']);
      },
      (error) => this.error$.next(error.error),
    );
  }
}
