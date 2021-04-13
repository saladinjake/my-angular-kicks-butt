import { AuthService } from '../../../sharedlibs/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _authService: AuthService, private _router: Router) {
  }



  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (this._authService.isAuthenticated()) {
        return true;
    }

    this._router.navigate(['/signin']);
    return false;
  }

}
