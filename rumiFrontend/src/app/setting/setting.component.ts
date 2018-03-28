import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, NgZone, ApplicationRef } from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  // user Object holder
  user: Object;

  // These will hold the old data before any changes 
  userID: string;
  name: string;
  username: string;
  email: string;
  password: string;

  // new password to update
  newpassword: any;

  // this is for hide/show the input form for changing password
  buttonclicked:boolean = false;

  constructor(private authService: AuthService,
    private router: Router,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    componentFactoryResolver: ComponentFactoryResolver, ngZone: NgZone, appRef: ApplicationRef, options: ToastOptions) 
    {
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
      this.getUserProfile();
    }

    showError(msg) {
      this.toastr.error(msg, 'Oops!');
    }

    showSuccess(msg) {
      this.toastr.success(msg, 'Success!');
    }

   // Get the user data from the database:
   getUserProfile(){
    this.authService.userProfile().subscribe(profile =>{
    this.user = profile['user'];
    this.userID = profile['user']._id;
    this.name = profile['user'].name;
    this.username = profile['user'].username;
    this.email = profile['user'].email;
    this.password = profile['user'].password;

  }, err =>{
    console.log('Failed to get the profile! err: '+err);
    this.router.navigate(['user/dashboard']);
    return false;
  });
}

  onChangeButton(){
    (this.buttonclicked == false) ? this.buttonclicked = true : this.buttonclicked = false;
  }

  onCancelButton(){
    this.newpassword = undefined;
    this.buttonclicked = false;
  }

  onSubmitButton(){
    
    // Get the data from the user with the new password to change it
    const update_user = {
      _id: this.userID,
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.newpassword
    }

    if(update_user.password == undefined){
      this.showError("Please enter your new password!");
      return false;
    }

    // User authService (services/auth.service.ts) to make a call to the backend, routes/contacts.js
    this.authService.changePassword(update_user).subscribe(data=>{
      this.showSuccess('Password Updated!');      
      // Get the new updated data
      this.getUserProfile();
      // Clear out the input form and close/hide it
      this.onCancelButton();
    }, err=>{
      console.log('this is an err with http client '+err);
    });
 

  }

  

}
