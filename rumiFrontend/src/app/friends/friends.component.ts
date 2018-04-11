import { Component, OnInit, ViewContainerRef , ComponentFactoryResolver, NgZone, ApplicationRef} from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import { Contact } from '../services/contact';
import { ValidationService  } from '../services/validation.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  // Search input string:
  inputString:string;

  // user object and user ID holder
  user: Object;
  userID: string;

  // Single contact or array contact
  contact:Contact;
  contactlist:Contact[];

  // Initialize theses for adding a new contact
  _id:string;
  firstName: string;
  lastName: string;
  preferredName: string;
  address: string;
  email: string;
  homePhone: string;
  cellPhone: string;
  user_id: string;

  constructor(private authService: AuthService,
              private router: Router,
              private validationService: ValidationService,
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
    this.getDashboard();
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

    showInfo(msg){
      this.toastr.info(msg, 'Info!');
    }

    // ========= Helper functions ============================
    clear(){
      this._id = undefined;
      this.firstName = undefined;
      this.lastName = undefined;
      this.preferredName = undefined;
      this.address = undefined;
      this.email = undefined;
      this.homePhone = undefined;
      this.cellPhone = undefined;
      this.user_id = undefined;
      // this.showInfo('Cleared!');
    }

    clearSearch(){
      this.inputString = undefined;
      this.showInfo('Cleared Search!');
    }

    hack(val){
      console.log("hack: "+val);
      return val;
    }

    // ========= Fetch the contact list ======================
  // Get the user data from the database:
  getDashboard(){
    this.authService.userDashboard().subscribe(dashboard =>{
    this.user = dashboard['user'];
    this.userID = dashboard['user']._id;
    this.contactlist = dashboard['contactlist'];
  }, err =>{
    console.log('Failed to get the dashboard! err: '+err);
    this.router.navigate(['']);
    return false;
  });
}

   // ============= Add, Search, Edit, Delete =================

   onSubmitButton(){
    const new_contact = {
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      preferredName: this.preferredName,
      address: this.address,
      email: this.email,
      homePhone: this.homePhone,
      cellPhone: this.cellPhone,
      date: new Date().toDateString(),
      user_id: this.userID
    }

    if(!this.validationService.validateAdd(new_contact)){
      this.showWarning('Please fill in all fields');
      return false;
    }

    if(!this.validationService.validateEmail(new_contact.email)){
      this.showWarning('Please use a valid email.');
      return false;
    }

    if(new_contact._id == undefined){
      this.add_contact(new_contact);
    }
    if(new_contact._id != undefined){
      this.edit_contact(new_contact);
    }

}

onEditButton(contact){
  this._id = contact._id;
  this.firstName = contact.firstName;
  this.lastName = contact.lastName;
  this.preferredName = contact.preferredName;
  this.address = contact.address;
  this.email = contact.email;
  this.homePhone = contact.homePhone;
  this.cellPhone = contact.cellPhone;
  this.user_id = contact.userID;
  this.showWarning('A contact is being updated!');
}

add_contact(newContact){
    this.authService.addContact(newContact).subscribe(data=>{
    this.showSuccess('Friend added!');
    this.getDashboard();
  }, err=>{
    this.showError('Failed to add a contact!'+err);
  });
  this.getDashboard();
  this.clear();
}

edit_contact(existing_contact){
    this.authService.updateContact(existing_contact).subscribe(data =>{
    this.getDashboard();
    this.showSuccess('Updated Contact!');
  }, err=>{
    this.showError('Failed to update a contact!'+err);
  });
  this.clear();
  // Feel the power of the twin!! or not
  this.getDashboard();
}

search_contact(){
  if(this.inputString == undefined){
    this.showError('Empty search!');
    return false;
  }
}

onDeleteButton(contact){
  this.authService.deleteContact(contact).subscribe(data=>{
    this.contactlist.splice(this.contactlist.indexOf(contact),1);
    this.showSuccess('Deleted a contact');
    this.getDashboard();
  }, err =>{
    console.log('Failed to delete a contact!'+err);
  });
  this.getDashboard();
}

}
