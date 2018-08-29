import { Component, OnInit } from '@angular/core';
import { User } from "../../classes/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  exists: Boolean = false;
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];

  constructor(private userService: UserService) { }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((res: any) => {
      console.log(res);
      this.users = res;
    });
  }

  usersHasLength(){
    return this.users.length;
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
