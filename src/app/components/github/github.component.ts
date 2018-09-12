import { Component, OnInit } from '@angular/core';
import { GithubService } from "../../services/github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor(private github: GithubService) { }

  repos: any;
  searchText: any;

  getAllRepos(){
    this.github.getAllRepos().subscribe(res => console.log(this.repos = res[1]));
  }

  showDescription(desc){
    if (desc === null){
      return 'There was no description provided';
    } else {
      return desc;
    }
  }

  checkDate(createdDate){
    const d = new Date();
    const created = new Date(createdDate);
    // console.log(created);
    d.setFullYear(d.getFullYear() + 1);
    if( d > created){
      return true;
    }
  }

  ngOnInit() {
    this.getAllRepos();
  }
}