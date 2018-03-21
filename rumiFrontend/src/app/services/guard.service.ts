import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardService {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }

  }

}
