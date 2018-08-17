import { Component, OnInit } from '@angular/core';
import { User } from "../../classes/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor() { }

  register(){
    console.log(this.user);
  }
  
  ngOnInit() {
  }

}
