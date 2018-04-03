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
  toNames: any = [];
  names:any = [];
  name : any;
  friendsNames: any[];
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
      // this.getFriendNames();
      console.log(this.transactionsList[0].friends_ids);
      this.names = this.transactionsList[0].friends_ids;
      console.log("names are: ",this.names);

      const length = _.range(this.names.length);
    
      _.each(length, (index) => {
        this.name = this.names[index];
        console.log(this.name);
      });

    }, err =>{
      console.log('Failed to get the transactions list! err: '+err);
      // this.router.navigate(['']);
      return false;
    });
  }

  // getFriendNames(inputname){
  //   this.authService.get_names(inputname).subscribe(data => {
  //     // this.names = data['nameList'];
  //     this.toNames.push(data);
  //     console.log('Success! Names in front end: ', this.toNames);

  //   }, err => {
  //     console.log('Failed to get the names from the friend\'s ids, ', err);
  //     return false;
  //   });
  // }

  hack(list){
    return list;
  }

// public _id: string;
// public group_name: string;
// public company_name: string;
// public receipt_link: string;
// public transaction_type : string;
// public items: string;
// public prices: string;
// public total: string;
// public friends_ids: string;
// public num_friends: string;
// public each_pay: string;
// public user_id: string;

}
