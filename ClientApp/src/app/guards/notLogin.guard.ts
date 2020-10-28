import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class notLoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private notifiry: NotifierService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(state.url);
  }

  check(url: string): boolean {
    if (!this.authService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/']);
      this.notifiry.notify("error", "You already login");
    }
  }
}
