import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import * as _ from 'lodash'; // to help loop over array
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  transactions : any[];
  receipts : any[];
  friends : any[];


  tran : any[];
  rep : any[];
  fri  = [];

  recentActivities: any[];

  arrived: boolean = false;
  // Declaring the Promise, yes! Promise!
  filtersLoaded: Promise<boolean>;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.getTheDashboard();
  }

 
  getTheDashboard(){
      // Make a call to the services for a HTTP GET request to the backend in routes/dashboard
      this.authService.getDashboard().subscribe(data => {
      
      // Received the data back, get the right list of json objects to the right variable:
      this.transactions = data['trans'];
      this.receipts = data['receipts'];
      this.friends = data['friends'];

          // Reverse the list so the most recent days first:
      this.transactions = this.transactions.reverse();
      this.receipts = this.receipts.reverse();
      this.friends = this.friends.reverse();

      this.filtersLoaded = Promise.resolve(true);
    });// End of getDashboard()

    // setTimeout(this.click(), 5000);
    // this.click();

    // console.log('Here****', this.friends);



  }

  hack(list){
    return list;
  }

  getData(){
    console.log('Here****', this.friends);
    
    // Init. and declared variables
    var i = 0, x = 0, y = 0, z = 0;
    var array = [];
    var recent:any = [];
    var len = 0;
    
    var temp:any = this.friends[0].date;             // April 5th
    var tempTran:any = this.transactions[0].date;   // April 6th
    var tempRe:any = this.receipts[0].date;         // April 7th
    array.push(temp);
    
    // Check if the date is already in the array, 
    // if not add it and change the temp(most recent date)
    if(!array.includes(this.transactions[0].date)){
      array.push(tempTran);
      temp = tempTran;
    }
    if(!array.includes(this.receipts[0].date)){
      array.push(tempRe);
      temp = tempRe;
    }
    
    len = Math.max( this.friends.length , Math.max(this.transactions.length, this.receipts.length));
    
    // Only add distinct date
    for(i = 0; i < len; i++){
          // if((i < this.friends.length) && (this.friends[i].date ===  temp)){
          //   continue;
          // }
          // if((i < this.transactions.length) && (this.transactions[i].date ===  temp) ){
          //   continue;
          // }
          // if(( i < this.receipts.length) && (this.receipts[i].date ===  temp)){
          //   continue;
          // }

          if((i < this.friends.length) && (temp !== this.friends[i].date)){
            temp = this.friends[i].date;
            array.push(temp);
          }
          if((i < this.transactions.length) && (temp !== this.transactions[i].date)){
            temp = this.transactions[i].date;
            array.push(temp);
          }
          if(( i < this.receipts.length) && (temp !== this.receipts[i].date) ){
            temp = this.receipts[i].date;
            array.push(temp);
          }
    }

    for(i=0; i <= array.length; i++){
      for(x = 0; x < this.transactions.length; x++){
        if(this.transactions[x].date === array[i]){
          recent.push(this.transactions[x]);
        }
      }
      for(y = 0; y < this.receipts.length; y++){
        if(this.receipts[y].date === array[i]){
          recent.push(this.receipts[y]);
        }
      }
      for(z = 0; z < this.friends.length; z++){
        if(this.friends[z].date === array[i]){
          recent.push(this.friends[z]);
        }
      }
    }
    
    this.recentActivities = recent;
    console.log('Final: ', this.recentActivities);
  }

  click(){
    console.log('Here****', this.friends);
    
    const lengthFriends = _.range(this.friends.length);
    const theLen = this.friends.length;
    console.log('theLen days: ', theLen);
    console.log('theLen days: ', this.friends[(theLen - 1)].date);
    console.log('theLen days: ', (this.friends[0].date));

    const first:any = new Date(this.friends[0].date);
    const last:any = new Date(this.friends[(theLen - 1)].date);
    const retval = Math.abs(first - last)/(1000*24*60*60);
    console.log('retval is: ',retval);


    
    const dayLen = String((this.friends[0].date) - (this.friends[(theLen - 1)].date));
    console.log('running for this many days: ', dayLen);

    console.log('Len: ', lengthFriends);
    var i = 0 ;
    var temp:any = this.friends[0].date;
    var array = [];
    array.push(temp);
    console.log('array: ', array);
    console.log('Contains: ', array.includes(temp));
    for(i = 0; i < this.friends.length; i++){
          if(this.friends[i].date ===  temp){
            console.log('In here**** wont add', i);
            continue;
          }
          if(temp !== this.friends[i].date){
            console.log('In here**** adding', i);
            temp = this.friends[i].date;
            array.push(temp);
          }

    }
    console.log('array: ', array);
    console.log('array len: ', array.length);
    var recent:any = [];
    var x = 0, y = 0, z =0;

    // console.log('Object ** :', this.friends[0])

    for(i=0; i <= array.length; i++){
      for(x = 0; x < this.transactions.length; x++){
        if(this.transactions[x].date === array[i]){
          console.log('In x adding: ',this.transactions[x].date);
          recent.push(this.transactions[x]);
        }
      }
      for(y = 0; y < this.receipts.length; y++){
        if(this.receipts[y].date === array[i]){
          console.log('In y adding: ',this.receipts[y].date);
          recent.push(this.receipts[y]);
        }
      }
      for(z = 0; z < this.friends.length; z++){
        if(this.friends[z].date === array[i]){
          console.log('In z adding: ',this.friends[z].date);
          recent.push(this.friends[z]);
        }
      }
    }
    this.recentActivities = recent;
    console.log('Final: ', this.recentActivities);



    // _.each(2, (days) => {

    //   _.each(lengthFriends, (index) => {
    //     // console.log('index: ', index);
    //       if(this.friends[index].date ===  "Wed Apr 04 2018"){
    //         console.log('In here****', index);
    //       }
    
    //       // this.fri.unshift(this.friends[index].date);
    
    //     }); 

    // });
    
  }

  // click() {

  //   const lengthTrans = _.range(this.transactions.length);
  //   const lengthReceipts = _.range(this.receipts.length);
  //   const lengthFriends = _.range(this.friends.length);

  //   _.each(lengthFriends, (index) => {
  //     // each log will print out the each file infor in the array filesToUpload
  //     // console.log(filesToUpload[index]);
  //     this.fri.unshift(this.friends[index].date);
  //     // this.fri = this.friends[index].date;
  //     console.log(index+': '+this.fri);
  //     // console.log(index+': '+this.transactions[index].date);
  //   });

  //   console.log('Sorted: ', this.fri );


  //   // _.each(lengthReceipts, (index) => {
  //   //   // each log will print out the each file infor in the array filesToUpload
  //   //   // console.log(filesToUpload[index]);
  //   //   console.log(index+': '+this.receipts[index].date);
  //   // });

  //   // _.each(lengthFriends, (index) => {
  //   //   // each log will print out the each file infor in the array filesToUpload
  //   //   // console.log(filesToUpload[index]);
  //   //   console.log(index+': '+this.friends[index].date);
  //   // });

  // }// End of click() function

}
