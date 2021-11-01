import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  logoutUser(): void {
    this.authService.removeUserCredentials();
  }

  checkUserIsAuth(): boolean {
    return this.authService.checkUserCredentials();
  }
}
