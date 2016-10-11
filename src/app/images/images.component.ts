import { Component, OnInit } from '@angular/core';
import { DEFAULTURL, IMAGELIST, ImageUrl } from './mock-images';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';
import { ImageInfo } from './imageInfo';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  imageList: ImageUrl[];
  imageInfoes: ImageInfo[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.imageList = IMAGELIST;
    this.getImageInfoes();
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
    this.httpService.getImageInfoes()
      .then(data => this.imageInfoes = data)
      .then(data => this.initImages());
  }

  //remove image event when click remove button
  removeImage(id: string) {
    let message: string;
    this.httpService.removeImage(id).then(mgs => this.getImageInfoes());
    console.log("remove Image : " + id);
  }

}
