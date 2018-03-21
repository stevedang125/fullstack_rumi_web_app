import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedinguardService {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['user/dashboard']);
      return false;
    }else{
      return true;
    }

  }

}
