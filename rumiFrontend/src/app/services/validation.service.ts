import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }


  
  validateBillCodeInput(info){
    if(info.name == undefined || info.bill_code == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateLogin(user){
    if(user.username == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateAdd(user){
    if((user.firstName == undefined|| user.lastName == undefined|| user.preferredName == undefined|| user.address == undefined || user.email== undefined || user.homePhone == undefined|| user.cellPhone== undefined)){
      return false;
    }else{
      return true;
    }
  }


}
