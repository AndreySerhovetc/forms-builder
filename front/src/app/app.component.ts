import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth-service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-builder';

  constructor(public authService: AuthService) {}
}
