import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { ErrorStateManager } from "../../classes/error-state-manager";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  authUser = {
    emailFormControl: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: ""
  };
  matcher = new ErrorStateManager();

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.authUser);
  }

  ngOnInit() {}
}