import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})

export class SingInComponent implements OnInit {
  loginForm!: FormGroup
  currentErr: string = ''
  successMsg: string = ''

  loginUserData = {
    email:'',
    password:''
  }

  constructor(
    private auth: AuthService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })

    this.loginForm.valueChanges.subscribe(
      res => {
        if (this.currentErr.length) this.currentErr = '';
        if (this.successMsg.length) this.successMsg = '';
      }
    )
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = { ...this.loginForm.value }

      this.loginUserData.email = formData.email;
      this.loginUserData.password = formData.password;

      this.loginUser();
    }
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.successMsg = "You successful logged in";
          this.route.navigate([''])
        },
        err => {
          this.loginForm.get('password')?.setValue('');
          this.currentErr = err.error;
        }
      )
  }
}
