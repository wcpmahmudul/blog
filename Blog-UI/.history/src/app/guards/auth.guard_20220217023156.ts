import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private acoountService: AccountService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const currentUser = this.acoountService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;

    if (isLoggedIn) {
      return true;
    }
/
    this.router.navigate[['items'], { relativeTo: this.route }];
    return false;
  }

}
