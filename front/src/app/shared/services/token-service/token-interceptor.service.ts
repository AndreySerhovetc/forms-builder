import { Injectable, Injector } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<string>, next: HttpHandler) {
    const authService = this.injector.get(AuthService);
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Session, ${authService.getToken()}`,
      },
    });

    return next.handle(authReq);
  }
}
