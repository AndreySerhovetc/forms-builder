import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
// import { User } from '../../interfaces/user';
// import { TokenInterface } from '../../interfaces/token';

describe('AuthService', () => {
  // let service: AuthService;
  // let httpController: HttpTestingController;
  let routerMock = { navigate: jasmine.createSpy('navigate') };
  // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNjE2ZDdmNTNmNjc1Zjg3OTYxMjNkZWM1IiwiaWF0IjoxNjM1OTUyMDAwfQ.0bU8KJ11ewExQ6IgfndHW2Ua6OdFksesWLvrMsi71dc';
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        AuthService, { provide: Router, useValue: routerMock },
      ],
    });
  
    // httpController = TestBed.inject(HttpTestingController);
  });

  it('should be initialized', inject([AuthService], (authService: AuthService) => {
    expect(authService).toBeTruthy();
  }));

  it('should delete token from local storage', inject([AuthService], (authService: AuthService) => {
    authService.removeUserCredentials();
    expect(localStorage.getItem('token')).toBeNull();
  }));

  it('should show token after call getToken', inject([AuthService], (authService: AuthService) => {
    const result = authService.getToken();
    expect(result).toBeNull();
  }));

  // it(
  //   'should perform login correctly',
  //   fakeAsync(
  //     inject(
  //       [AuthService, HttpTestingController],
  //       (authService: AuthService ) => {

  //         // Set up
  //         const url = 'http://localhost:3000/api/';
  //         // let token: TokenInterface;
  //         const user: User = { 
  //           email: 'test@uuu.com', 
  //           password: '123456',
  //         };

  //         // let response = {
  //         //   status: 'ok',
  //         //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNjE2ZDdmNTNmNjc1Zjg3OTYxMjNkZWM1IiwiaWF0IjoxNjM2MDI3MzMyfQ.orBfU7OxXusGFKNKvJozNC6dKS7mVjTr8GzaeJ-GURY',
  //         // };
  //         // End Setup

  //         // const requestWrapper = httpTestingController.expectOne( url );
        

  //         authService.loginUser(user).subscribe(
  //           (receivedResponse: any) => {
  //             expect(receivedResponse).toEqual(user);
  //           },
  //         );

  //         const req = httpController.expectOne({
  //           url: `${url}/login`,
  //         });
          
  //         req.flush(user);
          
  //         // expect(requestWrapper.request.method).toEqual('POST');
  //         // expect(response.status).toEqual('ok');
  //         // expect(response).toBeDefined();
  //       },
  //     ),
  //   ),
  // );
});
