import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, NgZone, ApplicationRef } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidationService } from '../services/validation.service';
import { ToastsManager, ToastOptions} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Declared variables:
  name: String;
  email: String;
  username: String;
  password: String;

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


  // ========= Submit and Cancel functions =====================
  onRegisterSubmit(){
    
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    
    if(!this.validateService.validateRegister(user)){
      this.showWarning('Please fill in all fields');
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.showWarning('Please use a valid email');
      return false;
    }

    this.authService.registerUser(user).subscribe(
      data =>{
        // this.showSuccess('You are registered and now can log in.');
        this.showSuccess('You are registered and now can log in');
        this.router.navigate(['/login']);
    }, error => {
        this.showError('Something went wrong, please try again');
       // this.showError();
        this.router.navigate(['/register']);
    });

  }

  onCancelSubmit(){
    this.username = undefined;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
  }




}
