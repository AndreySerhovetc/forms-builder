import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  loginUserData = {
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  loginUser() {
    
  }
}
