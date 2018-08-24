import { Component, OnInit } from '@angular/core';
// import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {
    // this.localStorage.set('currentUser', {name: 'Vincent', age: 25});
    // console.log('Before Removal', this.localStorage.get('currentUser'));
    // this.localStorage.remove('currentUser');
    // console.log('After removal', this.localStorage.get('currentUser'));
  }
}
