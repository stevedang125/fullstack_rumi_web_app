import { Component, OnInit } from '@angular/core';
import { ViewContainerRef , ComponentFactoryResolver, NgZone, ApplicationRef} from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import { Transactions } from '../models/transactions.model';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import * as _ from 'lodash'; // to help loop over files 


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  // user object and user ID holder 
  user: Object;
  userID: string;

  transactionsList : Transactions[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getAllTransactions();
  }

  getAllTransactions(){
    this.authService.getTransactions().subscribe(transactions =>{
      this.user = transactions['user'];
      this.userID = transactions['user']._id;
      this.transactionsList = transactions['transactionList'];
      console.log('Sucess! got the transactions list from the backend.');
    }, err =>{
      console.log('Failed to get the transactions list! err: '+err);
      // this.router.navigate(['']);
      return false;
    });
  }

  getFriendNames(inputname){
    console.log('**Input name: ', inputname);
    const newInput = {
      friend_id : inputname
    }
    this.authService.get_names(newInput).subscribe(data => {
      console.log('Return data: ', data['name'])
    }, err => {
      console.log('Failed to get the names from the friend\'s ids, ', err);
      return false;
    });
  }

  hack(list){
    return list;
  }
}
