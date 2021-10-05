import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  registerUserData = {
    email: '',
    password: '',
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        error => console.log(error)
        )
  }
}
