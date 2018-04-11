import { Injectable } from '@angular/core';

// Bring in file details object from models folder
import { FileDetails } from '../models/fileDetails.model';

// Bring in firebase
import { AngularFireModule } from 'angularfire2';
import {  AngularFireDatabase,
          AngularFireList,
          AngularFireObject,
          snapshotChanges } from 'angularfire2/database';
import * as firebase from 'firebase';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ImgDetails } from '../models/imgDetails.model';

import { AuthService } from '../services/auth.service';




@Injectable()
export class UploadService {

  private basePath = '/uploads';

  finishedProgress: any;

  // These variables will return the picture url and its id
  pic_link:string;
  pic_id:string;
  pic_name:string;

  name:string;
  link:string;
  key:string;

  image:ImgDetails;
  imageList = [];

  constructor(private ngFire: AngularFireModule,
              private db: AngularFireDatabase,
              private authService: AuthService) { }

  getList(){
    return;
  }

  getImageLink(){
    return this.link;
  }
  getImageId(){
    return this.key;
  }
  getImageName(){
    return this.name;
  }

  uploadFile(upload: FileDetails) {

    const new_name = Math.random().toString(36).substring(7) + new Date().getTime();

    console.log('New name is: ', new_name);

    // Get the the ref of storage in firebse console
    const storageRef = firebase.storage().ref();
    // Upload the file to storage
    const uploadTask = storageRef.child(`${this.basePath}/${new_name}`)
    .put(upload.file);



    // All of these are for the progress bar beauty >___<
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED ,
    // Three observers
    // 1) State_changed observer
    (snapshot) => {
      //upload in progress
      upload.progress = Math.round(
      (uploadTask.snapshot.bytesTransferred
        / uploadTask.snapshot.totalBytes ) * 100);
      console.log(upload.progress+'%');
    },
    // 2) error observer
    (err) => {
      // upload failed
      console.log('Upload failed, pay ur electricity bill, err msg => : ', err);
    },
    // 3) success observer
    (): any => {
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = new_name;
      upload.createOn = new Date().toDateString();
      this.saveFileData(upload);
    } );

  }

  // This method will save the file/img data to the database
  // because we stored the img/file into the storage already.
  // Easy for later if we need to look up the file/img in the
  // firebase console, maybe delete/edit feature? :)
  // NOTE: *********** delete/edit the file/img in the firebase
  // console database.(FEATURES!)
  public saveFileData(upload: FileDetails) {

    this.db.list(`${this.basePath}/`).push(upload).then(res => {
        const picture = {
        pic_key: res.key,
        pic_name: upload.name,
        pic_link: upload.url,
        pic_date: upload.createOn
      };
      console.log("in upload servic: ", picture.pic_date);
      this.imageList.push(picture);
      // console.log('this is the LIST ******', this.imageList);
      this.image = picture;
      this.addPictureToMlab();
    });
  }

  clearList(){
    this.imageList.length = 0;
    console.log('this is the LIST ****** after cleared', this.imageList);
  }

  // Make an http POST request to the backend to save the file/img
  // to the mLab remote database
  addPictureToMlab(){
    this.authService.addReceipts(this.image).subscribe(data => {
      console.log('Success Uploaded!', data);
      this.finishedProgress = true;
    },
    err => {
      console.log('Failed!! please not here, err msg: ', err);
    });

  }

}
