import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/api.response';
import { SignInModel } from '../Models/sign-in.model';
import { SignUpModel } from '../Models/sign-up.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  baseURL = "/api/Account";
  changeMenuLogin = new EventEmitter<boolean>();

  SignUp(model: SignUpModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseURL + "/register", model);
  }

  SignIn(model: SignInModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseURL + "/login", model);
  }

  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.changeMenuLogin.emit(false);
    this.router.navigate(['/']);
  }

  isAdmin() {
    var role = localStorage.getItem('role');
    if (role === "Admin") {
      return true;
    }
    else {
      return false;
    }
  }

  isLoggedIn() {
    var token = localStorage.getItem('token');
    if (token != null) {
      return true;
    }
    else {
      return false;
    }
  }

}
