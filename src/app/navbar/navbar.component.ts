import { Component, OnInit } from '@angular/core';
import { NavbarBtn } from './navbtn';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  btnlist:NavbarBtn[];
  tempname:string;

  constructor() { }

  ngOnInit() {
    this.btnlist=BTNLIST;
  }

  onClick(btn:NavbarBtn){
    this.tempname=btn.name;
  }
}

const BTNLIST:NavbarBtn[] = [
  {name:"dorry",img:"assets/logo.png",url:"/"},
  {name:"containers",img:"assets/containers.png",url:"/containers"},
  {name:"apps",img:"assets/apps.png",url:"/apps"},
];
