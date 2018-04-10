import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import * as _ from 'lodash'; // to help loop over array
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  debug: boolean = false;

  transactions : any[];
  receipts : any[];
  friends : any[];

  recentActivities = [];

  arrived: boolean = false;
  // Declaring the Promise, yes! Promise!
  filtersLoaded: Promise<boolean>;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.getTheDashboard();
  }

  ngOnChanges(){
    // this.getTheDashboard();
    // this.click();
  }

  // ========================== Helper functions ===========================
  compareDate(a, b){
    return (Date.parse(a) > Date.parse(b)) ? a : b;
  }

  hack(list){
    return list;
  }

  sortDateArray(array: any[]){
    var i = 0;
    for(i = 0; i < array.length; i++)
      array[i] = Date.parse(array[i]);

    array = array.sort().reverse();

    for(i = 0; i < array.length; i++)
      array[i] = new Date(array[i]).toDateString();

    return array;
  }

  // =========================== HTTP GET request ==========================
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


      this.clickForData();
    });// End of getDashboard()

  }

  clickForData(){
    var mostRecentDate : string = "";
    var maxLen = 0, i = 0, x = 0, y = 0, z = 0;
    var arrayOfDate = [];
    var tempDate : string = "";
    var recent = [];

    // This part will get the most recent date out of all three list of json objects
    if(this.debug) {
      console.log('mostRecentDate friends: ',this.friends[0].date);
      console.log('mostRecentDate transactions: ',this.transactions[0].date);
      console.log('mostRecentDate receipts: ',this.receipts[0].date);
    }
    mostRecentDate = this.compareDate(this.friends[0].date , this.transactions[0].date);
    mostRecentDate = this.compareDate(mostRecentDate , this.receipts[0].date);
    if(this.debug)
      console.log('mostRecentDate: ',mostRecentDate);

    // This part will get the max len
    maxLen = Math.max( this.friends.length , Math.max( this.transactions.length , this.receipts.length));

    if(this.debug)
      console.log('maxLen: ', maxLen);

    // This part will get all the date added from all the lists
    arrayOfDate.push(mostRecentDate);
    // tempDate = mostRecentDate;
    if(this.debug)
      console.log('arrayOfDate: ', arrayOfDate);

    for(i = 0; i < maxLen; i++){
      // If the date is already there, skip
      if( (i < this.transactions.length) && (tempDate === this.transactions[i].date) ){

        continue;
      }
      if( (i < this.friends.length) && (tempDate === this.friends[i].date) ){

        continue;
      }
      if( (i < this.receipts.length) && (tempDate === this.receipts[i].date) ){

        continue;
      }
      // If the date is not in the array, change the tempDate and add it to the array
      if(  (i < this.transactions.length) && (tempDate !== this.transactions[i].date) && (!arrayOfDate.includes(this.transactions[i].date))  ){
        tempDate = this.transactions[i].date;
        arrayOfDate.push(tempDate);
      }
      if(  (i < this.friends.length) && (tempDate !== this.friends[i].date) && (!arrayOfDate.includes(this.friends[i].date))  ){
        tempDate = this.friends[i].date;
        arrayOfDate.push(tempDate);
      }
      if(  (i < this.receipts.length) && (tempDate !== this.receipts[i].date) && (!arrayOfDate.includes(this.receipts[i].date))  ){
        tempDate = this.receipts[i].date;
        arrayOfDate.push(tempDate);
      }
    } // End of for loop

    // Array of Date all sorted from most recent date.
    arrayOfDate = this.sortDateArray(arrayOfDate);

    if(this.debug)
      console.log('arrayOfDate all sorted: ', arrayOfDate);

    // Loop through all the list of json Objects to add the objects sort by the date:
    for(i=0; i <= arrayOfDate.length; i++){

      for(x = 0; x < this.transactions.length; x++){
        if(this.transactions[x].date === arrayOfDate[i]){
          recent.push(this.transactions[x]);
        }
      }

      for(y = 0; y < this.receipts.length; y++){
        if(this.receipts[y].date === arrayOfDate[i]){
          recent.push(this.receipts[y]);
        }
      }

      for(z = 0; z < this.friends.length; z++){
        if(this.friends[z].date === arrayOfDate[i]){
          recent.push(this.friends[z]);
        }
      }

    }// End of the big for loop

    if(this.debug)
      console.log("Recent array: ", recent);
    this.recentActivities = recent;

  }// End of the clickForData()
}
