import { Component, OnInit } from '@angular/core';
import { Image } from './image';
import { IMAGELIST } from './mock-images';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  appList: Image[];
  imageInfoes: Object[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    //this.appList = IMAGELIST;
    this.getImageInfoes();
  }

  getImageInfoes() {
    this.httpService.getImageInfoes()
      .then(
      data => this.imageInfoes = data,
    );
  }
}
