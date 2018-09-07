import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../../components/home/home.component";
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from "../../components/register/register.component";
import { UsersComponent } from '../../components/users/users.component';
import { NotFoundComponent } from "../../components/not-found/not-found.component";

import { ProfileModule } from "../profile/profile.module";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "users", component: UsersComponent },
  // { path: 'user/:id', component: ProfileComponent },
  // { path: "user/:id", component: ProfileComponent, children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full'},
  //     { path: "home", component: ProfileHomeComponent },
  //     { path: "about", component: ProfileAboutComponent },
  //     { path: "contact", component: ProfileContactComponent }
  // ]},
  { path: 'user/:id', loadChildren: () => ProfileModule },
  // { path: 'user/:id', loadChildren: '../profile/profile.module#ProfileModule' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
