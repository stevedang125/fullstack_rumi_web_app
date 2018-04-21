import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, NgZone, ApplicationRef } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidationService } from '../services/validation.service';
import { ToastsManager, ToastOptions} from 'ng2-toastr/ng2-toastr';
import * as _ from 'lodash'; // to help loop over files

@Component({
  selector: 'app-billcode',
  templateUrl: './billcode.component.html',
  styleUrls: ['./billcode.component.css']
})
export class BillcodeComponent implements OnInit {

    // Declared variables:
    inputName: String = "Dita Dewindita";
    inputCode: String = "576HJK";

    trans_info: any[];

   transactionlist: any [];

   name: any;
   items: any[];
   og_prices: any[];
   split_prices: any[];


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

  hack(list)
  {
    return list;
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
    onSubmit(){
      
      const info = {
        bill_code: this.inputCode,
        name: this.inputName
      };
      
      // if(!this.validateService.validateRegister(user)){
      //   this.showWarning('Please fill in all fields');
      //   return false;
      // }
  
      // if(!this.validateService.validateEmail(user.email)){
      //   this.showWarning('Please use a valid email');
      //   return false;
      // }
  
      this.authService.getTransactionByCode(info).subscribe(
        data =>{
          // this.showSuccess('You are registered and now can log in.');
          this.showSuccess('Found you bill!! eyyyyyyyyyy ^^');
          this.trans_info = data['fast_info'];
          this.transactionlist = data['fast_info'].transaction_list;
          // console.log(this.trans_info);
          // console.log(this.transactionlist);

          this.getDataArrayList(this.trans_info);

      }, error => {
          this.showError('Something went wrong, please try again');
         // this.showError();
          this.router.navigate(['/billcode']);
      });
  
    }
  
    onCancel(){
      this.inputName = undefined;
      this.inputCode = undefined;
      this.router.navigate(['/']);
    }


    getDataArrayList(list)
    {
      // const length = _.range(list.length );

    // _.each(length, (index) => {
    //   // each log will print out the each file infor in the array filesToUpload
    //   // console.log(filesToUpload[index]);
    //   console.log(list.transaction_list[index]);
    //   this.transactionlist.push(list.transaction_list[index]);

    //   // this.upload = new FileDetails(filesToUpload[index]);
    //   // this.uploadService.uploadFile(this.upload);
    // });
      var index = 0;
      list.forEach(element => {
        console.log(element.transaction_list[0]);
        console.log(element.transaction_list[1]);
        
        if(element.transaction_list[index].name == this.inputName){

          this.name = element.transaction_list[index].name;
          this.items = element.transaction_list[index].items;
          this.og_prices = element.transaction_list[index].og_prices;
          this.split_prices = element.transaction_list[index].split_prices;


          // this.transactionlist.push(element.transaction_list[index]);
          index++;
        }



      });


      console.log(this.name);
      console.log(this.items);
      console.log(this.og_prices);
      console.log(this.split_prices);
      
      

    }

}
