import { Component, OnInit } from '@angular/core';
import { Image } from './image';
import { IMAGELIST } from './mock-images';
import { HttpService } from '../http.service';
import { ImageInfo } from '../imageInfo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  appList: Image[];
  imageInfoes: ImageInfo[];
  errorMessage: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.appList = IMAGELIST;

    this.httpService.getHeroes()
      .then(
      images => this.imageInfoes = images,
      error => this.errorMessage = <any>error);
    console.log("nmd");
    console.log(this.errorMessage);
  }
}
