import { Component, OnInit } from '@angular/core';

import { IUser } from '../../interfaces/i-user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  getId(){
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    })
  }

  getUser(id){
    this.userService.getUser(id).subscribe((user: any) => this.user = user);
  }


  ngOnInit() {
    this.getId();
  }

}
