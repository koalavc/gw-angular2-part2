import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { User } from '../classes/user';
import { Router } from "@angular/router";

import { ApiService } from "./api.service";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService, private router: Router) {  }

  register(user: User){
    return this.api.post('/postUser', user).subscribe((res: any) => {
      console.log(res);
      this.router.navigateByUrl("/");
    });
  }

  login(user: any){
    return this.api.post('/userLogin', user).subscribe((res: any) => {
      console.log(res);
      this.router.navigateByUrl('/');
    });
  }

  getAllUsers(){
    return this.api.get('/getAllUsers');
  }
}
