import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, NgZone, ApplicationRef } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidationService } from '../services/validation.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  // Declared variables:
  token: any;
  username:String;
  password:String;


  warning :any;
  warningMsg: string = "Please fill in all fields!";

  // Inject into the constructor
  constructor(private router: Router,
    private validateService : ValidationService,
    public authService: AuthService,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    componentFactoryResolver: ComponentFactoryResolver, ngZone: NgZone, appRef: ApplicationRef, options: ToastOptions) { 
      this.toastr.setRootViewContainerRef(vcr);
      Object.assign(options, {
      maxShown: 1,
      positionClass: "toast-top-center",
      showCloseButton: true,
      toastLife: 3000
      });

      // =============== More Toastr message options here: ===============
      // toast-top-right (Default)
      // toast-top-center
      // toast-top-left
      // toast-top-full-width
      // toast-bottom-right
      // toast-bottom-center
      // toast-bottom-left
      // toast-bottom-full-width
    }

  ngOnInit() {
  }

    // ========== Toastr Messages =======================================
    showSuccess(msg) {
      this.toastr.success(msg, 'Success!');
    }
  
    showWarning(msg) {
      // this.toastr.setupToast(toast:Toas, Position='toast-top-right');
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
      this.warning = true;
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
