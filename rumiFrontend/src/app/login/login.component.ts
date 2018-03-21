import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidationService } from '../services/validation.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Declared variables:
  token: any;
  username:String;
  password:String;

  // Inject into the constructor
  constructor(private router: Router,
    private validateService : ValidationService,
    public authService: AuthService,
    public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

    // ========== Toastr Messages =======================================
    showSuccess(msg) {
      this.toastr.success(msg, 'Success!');
    }
  
    showWarning(msg) {
      this.toastr.warning(msg, 'Alert!');
    }
  
    showError(msg) {
      this.toastr.error(msg, 'Oops!');
    }

  // ======= Login and Cancel functions ============
  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    };

    if(!this.validateService.validateLogin(user)){
      this.showWarning('Please fill in all fields!');
      return false;
    }

    this.authService.loginUser(user).subscribe(data =>{
      var success = data['success'];
      if(success){
        const token = data['token'];
        const userObject = data['user'];
        this.authService.storeUserToken(token, userObject);
        this.showSuccess('You have logged in!');
        this.authService.setLoggedIn();
        this.router.navigate(['/user/dashboard']);
      }

      // Error messages should be: wrong password || user not found
      if(!success){
        this.showError(data['msg']);
        this.router.navigate(['/login']);
      }

    }, err =>{
      // When the server is not running on the backend
      this.showError('Oh no! Something went wrong. Please try again!');
      console.log(err);
      this.router.navigate(['/login']);
    })

  }

  onCancelSubmit(){
    this.username = undefined;
    this.password = undefined;
  }

}
