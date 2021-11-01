import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  // let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [AuthService],
    });
  });

  it('should be initialized', inject([AuthService], (authService: AuthService) => {
    expect(authService).toBeTruthy();
  }));

  // it('should perform login correctly',
  //   fakeAsync(
  //     inject(
  //       [AuthService, HttpTestingController],
  //       (authService: AuthService, backend: HttpTestingController) => {
  //         const url = 'http://localhost:4200/login';
  //         const responseObject = {
  //           success: true,
  //           message: 'login was successful',
  //         };
  //         const user = new User('test@uuu.com', '123456');
  //         let response: string = '';

  //         authService.loginUser(user).subscribe(
  //           (receivedResponse: any) => {
  //             response = receivedResponse;
  //           },
  //           (error: any) => {},
  //         );
 
  //         const requestWrapper = backend.expectOne({ url });
  //         requestWrapper.flush(responseObject);

  //         tick();

  //         expect(requestWrapper.request.method).toEqual('POST');
  //         expect(response.body).toEqual(responseObject);
  //         expect(response.status).toBe(200);
  //       },
  //     ),
  //   ),
  // );
});
