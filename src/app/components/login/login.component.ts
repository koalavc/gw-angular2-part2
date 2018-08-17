import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authUser: object = {
    email: '',
    password: ''
  };

  constructor() { }

  login(){
    console.log(this.authUser);
  }

  ngOnInit() {
  }

}
