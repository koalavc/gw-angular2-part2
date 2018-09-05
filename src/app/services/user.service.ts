import { Injectable } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

import { User } from '../classes/user';

import { ApiService } from "./api.service";
import { LocalStorageService } from "./local-storage.service";
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profileUrl: string;
  currentProfile: IUser;

  constructor(private api: ApiService, private router: Router, private localStorage: LocalStorageService, private route: ActivatedRoute) {  }

  register(user: User){
    return this.api.post('/postUser', user).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user);
    }, err => console.log('There was an error!'), () => this.router.navigateByUrl("/"));
  }

  login(user: any){
    return this.api.post('/userLogin', user).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user);
    }, err => console.log(err), () => this.router.navigateByUrl('/'));
  }

  logout(){
    this.localStorage.remove('currentUser');
    this.router.navigateByUrl('/login');
  }

  getAllUsers(){
    return this.api.get('/getAllUsers');
  }

  getUser(_id){
    return this.api.get(`/user/${_id}`);
  }

  getProfileURL(){
    console.log(this.route.snapshot.url);
  }
}
