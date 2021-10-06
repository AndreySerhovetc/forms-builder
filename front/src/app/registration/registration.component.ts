import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registForm!: FormGroup
  successMsg: string = ''
  errorMsg: string = ''

  registerUserData = {
    email: '',
    password: ''
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.registForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })

    this.registForm.valueChanges.subscribe(
      res => {
        if (this.errorMsg.length) this.errorMsg = '';
      }
    )
  }

  onSubmit() {
    if (this.registForm.valid) {
      const formData = { ...this.registForm.value }

      this.registerUserData.email = formData.email;
      this.registerUserData.password = formData.password;

      this.registerUser();
      this.registForm.reset();
    }
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.successMsg = "Registration successful"
        },

        error => this.errorMsg = error.error 
      )
  }
}
