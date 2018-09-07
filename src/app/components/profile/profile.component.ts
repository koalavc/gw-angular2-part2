import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
  url: string = '';
  isActive: boolean;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  getId(){
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    })
  }

  getUser(id){
    this.userService.getUser(id).subscribe((user: any) => {
      this.user = user;
      console.log(user);
      this.userService.currentProfile = user;
    });
  }
  
  getUrl(){
    // this.url = this.router.url;
    console.log(this.route.snapshot.url);
  }

  ngOnInit() {
    this.getId();
    this.getUrl();
  }

}
