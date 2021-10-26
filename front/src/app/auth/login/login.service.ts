import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TokenInterface } from 'src/app/shared/interfaces/token';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public error$ = new Subject<string>();
  public success$ = new Subject<string>();
  public loginUserData = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  setUserData(loginData: { email: string; password: string }): void {
    this.loginUserData.email = loginData.email;
    this.loginUserData.password = loginData.password;

    this.checkUserData();
  }

  checkUserData(): void {
    this.auth.loginUser(this.loginUserData).subscribe(
      (res: TokenInterface) => {
        localStorage.setItem('token', res.token!);
        this.success$.next('You successful logged in');
        this.router.navigate(['']);
      },
      (err) => {
        this.error$.next(err.error);
      }
    );
  }
}
