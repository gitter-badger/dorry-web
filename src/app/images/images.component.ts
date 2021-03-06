import { Component, OnInit } from '@angular/core';
import { DEFAULTURL, IMAGELIST, ImageUrl } from './mock-images';
import { ImagesService } from './images.service';
import { Observable } from 'rxjs/Observable';
import { ImageInfo } from './imageInfo';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {

  imageList: ImageUrl[];
  imageInfoes: ImageInfo[];

  showAlert: boolean;
  imageId: string;

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.imageList = IMAGELIST;
    this.getImageInfoes();
    this.showAlert = false;
  }

  //bindding the ImageInfo and image url
  initImages() {
    console.log(this.imageInfoes);

    for (let imageInfo of this.imageInfoes) {
      for (let imageUrl of this.imageList) {
        if (imageInfo.RepoTags[0] == imageUrl.name)
          imageInfo.url = imageUrl.name;
        else
          imageInfo.url = DEFAULTURL;
      }
    }
  }

  //get json object array from Docker Daemon
  getImageInfoes() {
    this.imagesService.getImageInfoes()
      .then(data => this.imageInfoes = data)
      .then(data => this.initImages());
  }

  //remove image event when click remove button
  removeImage(id: string) {
    let message: string;
    this.imagesService.removeImage(id)
      .then(msg => this.showMessage(msg))
      .then(msg => this.getImageInfoes());
    console.log("remove Image : " + id);
  }

  //show message after removing image
  //1.success:Remove the app successfully
  //2.error: Remove the app error
  private alertMessage: string; // alert dialog message after removing image
  private messageState: boolean; // whether need to show the message
  private isError: boolean;//is message correctly
  showMessage(msg: any) {
    let msgType = typeof msg;
    let message: string;
    if (msgType == "string") {
      message = msg;
      this.isError = false;
    }
    else {
      message = msg.message;
      this.isError = true;
    }

    this.messageState = true;
    this.alertMessage = message;
    // setTimeout(function() {
    //   this.messageState = false;
    // }.bind(this), 3000);
  }


  //click image icon show image info
  private showInfoWindow: boolean; //whether need to show imageinfo popup window
  private detailApp: ImageInfo;//the app need to show detail
  openDetailInfo(app: ImageInfo) {
    console.log(app.Id);
    this.showInfoWindow = true;
    this.detailApp = app;
    this.imagesService.inspectImage(app.Id)
      .then(data => this.detailApp.createDate = this.formatCreatedTime(data.Created));
  }

  //format the create time of image
  //Input: 2016-09-23T16:29:57.276868291Z,etc
  //Output: string 2016-09-23 16:29:57
  formatCreatedTime(created: string) {
    let datetime: string;
    datetime = created.split(".")[0].replace("T", " ");
    return datetime;
  }

  closeDetailInfo() {
    this.showInfoWindow = false;
  }

  displayAlert(id: string) {
    this.showAlert = true;
  }

  hideAlert(id: string) {
    this.showAlert = false;
  }

  getImageId(id: string) {
    this.imageId = id;
  }
}
