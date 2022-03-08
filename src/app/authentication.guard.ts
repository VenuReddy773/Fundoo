import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthguardService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.gettoken()) {
      this.router.navigate(["/signin"]);
    }
    return this.authService.gettoken();
  }
}
