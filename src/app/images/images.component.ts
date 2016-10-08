import { Component, OnInit } from '@angular/core';
import { Image } from './image';
import { IMAGELIST } from './mock-images';
import { HttpService } from '../http.service';
import {Jsonp} from '@angular/http';
import { ImageInfo } from '../imageinfo';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  appList: Image[];
  httpService: HttpService;
  imageInfoes: ImageInfo[];

  constructor() { }

  // ngOnInit() {
  //   this.appList = IMAGELIST;
  //   this.httpService.getImageInfo();
  //   console.log("tmd");
  //   this.httpService.getImageInfo().then(result => {
  //     this.data = result;
  //     console.log(this.data);
  //   });
  // }

  ngOnInit() {
    this.appList = IMAGELIST;

    this.httpService.getImageInfo()
      .subscribe(
      result => this.imageInfoes = result,
    );
  }
}
