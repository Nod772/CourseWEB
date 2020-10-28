import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { SignInModel } from './app/Models/sign-in.model';
import { SignInComponent } from './app/Sign-in/Sign-in.component';
import { SignUpComponent } from './app/Sign-up/Sign-up.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: HomeComponent },
  { path: "sign-in", pathMatch: 'full', component: SignInComponent },
  { path: "sign-up", pathMatch: 'full', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
