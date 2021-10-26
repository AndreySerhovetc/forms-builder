import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { TokenInterface } from '../../interfaces/token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user: User): Observable<TokenInterface> {
    return this.http.post(this.registerUrl, user);
  }

  loginUser(user: User): Observable<TokenInterface> {
    return this.http.post(this.loginUrl, user);
  }

  removeUserCredentials() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  checkUserCredentials(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
