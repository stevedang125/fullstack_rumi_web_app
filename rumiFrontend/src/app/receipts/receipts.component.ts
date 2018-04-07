// Logic:
// Get the file/image info in the list of files/images (handleFiles method)
// Store the files/images into another database (firebase console).
// (UploadFiles method will call uploadFile() in services/upload.service)
        // ^ The purpose of this is to store the file/img somewhere else
        // instead for mLab (which saved me some pains) and get the URL link
        // of the img/file then store the link in our mLab
// Retrieve the file/img URL, and make a POST request to the backend and
// save the file/image info into our mLab remote database under
// the "receipts" collection.
// (addPictureToMlab() method in services/upload.service will call
// addReceipts() method in services/auth.service to make an http POST request)

// If you have any question about he frontend or backend, let me know.
// Steve _m_(^___^)_m_

import { Component, OnInit, OnChanges, Input, SimpleChanges  } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { FileDetails } from '../models/fileDetails.model';
import * as _ from 'lodash'; // to help loop over files
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ImgDetails } from '../models/imgDetails.model';
import { AuthService } from '../services/auth.service';

// Bring in firebase to upload the files/images to the storage and database
// in firebase console
import { AngularFireModule } from 'angularfire2';
import {  AngularFireDatabase,
          AngularFireList,
          AngularFireObject,
          snapshotChanges } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit, OnChanges {

  @Input() finishedProgress;

  checkpoint: number = 0;

  progress: any;

  // Initialize the type for these variables
  files:FileList;

  upload:FileDetails;
  pic:ImgDetails;

  // This is will hold all the json objects retrieved from mlab database
  receiptsList: any[];

   // user object and user ID holder
   user: Object;
   userID: string;

  // Inject the uploadservice and authservice
  // to upload the files/images and make a POST request
  // to the backend and save the picture details into mLab
  constructor(private uploadService : UploadService,
              private authService: AuthService) { }

  // Make a GET request to the backend on the first load
  // to retrive the files/images
  ngOnInit() {
    this.getPictures();
    // this.fbGetData();
  }


  reload(){
    // console.log('In here');
    this.getPictures();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.finishedProgress.currentValue);// current selected value
    console.log(changes.finishedProgress.previousValue);// previous selected value
    this.getPictures();



  }

  // This method listener will watch for changes from the firebase console
  // whenever a new file/img add to the database, this will fire and call the
  // backend the load the new file/img to the receiptList.
  fbGetData(){
    firebase.database().ref('/uploads/').on('child_added', (result) => {
      console.log('Just ADDED a child !!!!');
      console.log(result.val());
      // this.receiptsList.push(result.val());
      this.getPictures();
    });
  }

  // On the first load, get the user info
  // user id and the receiptList from "receipts" collection
  // in mLab database
  getPictures(){
      this.authService.getReceipts().subscribe(data =>{
      this.user = data['user'];
      this.userID = data['user']._id;
      this.receiptsList = data['receiptList'];
      console.log('Success! Got the pic infor.');
      console.log(this.receiptsList)
    }, err =>{
      console.log('Failed to get the picture! err: '+err);
      // this.router.navigate(['']);
      return false;
    });
  }


  // Only take the files/images info from the $event
  handleFiles(event) {
    // console.log(event.target.files);
    this.files =  event.target.files;
  }

  // Loop through each file/img in the file/img list and call
  // upload service to upload each file/img to Firebase Console
  uploadFiles() {
    // Get the files from the global var "files"
    const filesToUpload = this.files;
    const length = _.range(filesToUpload.length);

    _.each(length, (index) => {
      // each log will print out the each file infor in the array filesToUpload
      // console.log(filesToUpload[index]);
      this.upload = new FileDetails(filesToUpload[index]);
      this.uploadService.uploadFile(this.upload);
    });

    this.fbGetData();
    // this.getPictures();
    // reload();
  }

  // To be deleted :)
  get(){
    console.log(this.uploadService.getImageId());
    console.log(this.uploadService.getImageLink());
    console.log(this.uploadService.getImageName());
  }

  // To be deleted :)
  clearArray(){
    this.uploadService.clearList();
  }





}
