import { Injectable } from '@angular/core';

import { ApiService } from "./api.service";
import { LocalStorageService } from "./local-storage.service";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { Post } from "../classes/post";
import { Comment } from "../classes/comment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private api: ApiService, 
              private localStorage: LocalStorageService, 
              private userService: UserService,
              private router: Router ) { }

  getPosts(){
    return this.api.get('/posts');
  }

  getPost(_id: string){
    this.api.get(`/post/${_id}`);
  }

  makePost(post: Post){
    return this.api.post('/newPost', post).subscribe((res: any) =>{
      return;
    }, err => {
      console.log(`An error occured: ${err}`, () => { this.router.navigateByUrl('/'); });
    });
  }

  makeComment(post_id: string, comment: Comment ){
    return this.api.post(`/newComment/${post_id}`, comment).subscribe(() => {
      return;
    }, err => console.log(`An Error occured: ${err}`),
    () => this.router.navigateByUrl(`/post/${post_id}`));
  }
}
