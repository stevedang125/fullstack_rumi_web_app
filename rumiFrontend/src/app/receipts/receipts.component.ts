import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
import { AsyncValidatorFn } from '@angular/forms';

interface FeaturedPhotosUrls {
  url1 : string,
  url2 : string
}

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {

  photoUrl : any;

  public featuredPhotoStream : AngularFireObject<FeaturedPhotosUrls>;

  constructor(private afStorage: AngularFireStorage,
              public db : AngularFireDatabase ) {
    
              this.featuredPhotoStream = this.db.object('/upload/');
  }

  ngOnInit() {
  }

  // ============================= Helper Functions ===========================================
  getLink(url){
    this.photoUrl = url;
    console.log("In getLink(), here is the photo URL from firebase: ", this.photoUrl);
  }

  
  // ================== Getting file info and upload to Firebase Storage =====================

  // // Fun way for file info:
  // featuredPhotoSelected(event : MSInputMethodContext){
  //   const target : HTMLInputElement = <HTMLInputElement>event.target;
  //   const files: FileList = target.files;
  //   const file: File = files[0];
  //   console.log("Selected filename: ", file.name);
  // }

  // Faster way in TypeScript:
  featuredPhotoSelected(event : any){
    const file: File = event.target.files[0];
    console.log("Selected filename: ", file.name);

    // // Store the photo
    // const metaData = {'contentType': file.type};
    // const storageRef: firebase.storage.Reference = firebase.storage().ref('/upload/'+file.name);
    // // const storageRef: firebase.storage.Reference = firebase.storage().ref('/photos/');
    // storageRef.put(file, metaData);
    // console.log("Uploading filename: ", file.name);

    // This way works too
    this.afStorage.upload('/upload/'+file.name, file);
    console.log("Uploading file: ", file);
    console.log("Uploading filename: ", file.name);
    
    this.afStorage.storage.ref('/upload/'+file.name).getDownloadURL().then(url => {
      console.log('This is the url in getDownloadURL(): '+url);
      this.getLink(url);
    }).catch(err => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
          switch (err.code) {
            case 'storage/object_not_found':
              // File doesn't exist
              console.log('storage/object_not_found');
              break;

            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              console.log(' User doesnt have permission to access the object');
              break;

            case 'storage/canceled':
              console.log(' storage/canceled');
              // User canceled the upload
              break;

            case 'storage/unknown':
              console.log(' storage/unknown');
              // Unknown error occurred, inspect the server response
              break;
          }
    });



  } // end of featuredPhotoSelected

  // More functions here:




}// end of export class
