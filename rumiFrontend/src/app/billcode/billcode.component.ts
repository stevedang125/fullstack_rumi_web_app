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

    // Debugging:
    inputName: String = "Abe";
    inputCode: String = "777HLK";

    // Debugging:
    // inputName: String = "Dita Dewindita";
    // inputCode: String = "576HJK";

    // Default variables:
    // inputName: String;
    // inputCode: String;

    trans_info: any[];

   transactionlist: any [];

   name: any;
   items: any[];
   og_prices: any[];
   split_prices: any[];

   bill_date: any;


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
      
      this.name = null;
      this.items = [];
      this.og_prices = [];
      this.split_prices = [];


      const info = {
        bill_code: this.inputCode,
        name: this.inputName
      };
      
      if(!this.validateService.validateBillCodeInput(info)){
        this.showWarning('Please fill in all fields');
        return false;
      }

  
      this.authService.getTransactionByCode(info).subscribe(
        data =>{

          this.trans_info = data['fast_info'];
          this.transactionlist = data['fast_info'].transaction_list;
          this.getDataArrayList(this.trans_info);

      }, error => {
          this.showError('Something went wrong, please try again');
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
      list.forEach(element => {
        this.bill_date = new Date(element.bill_date).toDateString();

        for(let object in element.transaction_list)
        {
          console.log(element.transaction_list[object].name);
          if(this.inputName == element.transaction_list[object].name)
          {
            this.name = element.transaction_list[object].name;
            this.items = element.transaction_list[object].items;
            this.og_prices = element.transaction_list[object].og_prices;
            this.split_prices = element.transaction_list[object].split_prices;
          }
        }
      });
    }

}
