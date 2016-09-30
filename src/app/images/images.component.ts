import { Component, OnInit } from '@angular/core';
import { Image } from './image';
import { IMAGELIST } from './mock-images';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  appList: Image[];

  constructor() { }

  ngOnInit() {
    this.appList = IMAGELIST;
  }

}
