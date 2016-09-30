export class NavbarBtn {
  name: string;
  out: string;
  img: string;
  clickedImg: string;
  url: string;
  isClicked: boolean;

  constructor(name: string, out: string, img: string, clickedImg: string, url: string, isClicked: boolean) {
    this.name = name;
    this.out = out;
    this.img = img;
    this.clickedImg = clickedImg;
    this.url = url;
    this.isClicked = isClicked;
  }
}
