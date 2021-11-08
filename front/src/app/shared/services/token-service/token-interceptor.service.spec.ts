import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth-service/auth.service';

import { TokenInterceptorService } from './token-interceptor.service';

describe('TokenInterceptorService', () => {
  let service: AuthService;
  // let httpMock: HttpTestingController;
  // let url = 'http://localhost:3000/api/login';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true,
        },
      ],
    });
    service = TestBed.inject(AuthService);
    // httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should add an Authorization header', () => {
  //   const httpRequest = httpMock.expectOne(url);
    
  //   expect(httpRequest.request.headers.get('Session')).toBe(service.getToken());
  // });

});
