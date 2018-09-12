import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GithubService {

  // An API allow you to get data that person set up
  githubUrl = "https://api.github.com/users/koalavc/repos?per_page=100";
  constructor(private http: HttpClient) {}

  getAllRepos(){
    return this.http.get(this.githubUrl);
  }
}
