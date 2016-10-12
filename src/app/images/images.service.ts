import { Injectable, Injector } from '@angular/core';
import { Headers, Http, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ImageInfo } from './imageInfo';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImagesService {
  private address = 'http://localhost:4243';


  //docker remote api part
  private listImages = '/images/json?all=0';//[GET]  list images
  private removeImages = '/images/{id}?force=1';//[DELETE]  remove image ,add image id after the url

  constructor(private http: Http) { }

  //get all image infoes from docker daemon
  getImageInfoes() {
    return this.http.request(
      new Request({
        method: RequestMethod.Get,
        url: this.address + this.listImages
      }))
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  //remove image by image id
  removeImage(id: string) {
    return this.http.delete(this.address + this.removeImages.replace("{id}", id))
      .toPromise()
      .then(this.getRemoveImageResMsg,
      this.extractData
      )
      .catch(this.handleError);
  }

  //get remove image response code
  //reponse code:
  //200 - no error
  //404 - no such image
  //409 - conflict
  //500 - server error
  getRemoveImageResMsg(res: Response) {
    if (res.status) {
      return "Remove the app successfully";
    }
    else {
      return res.json();
    }
  }

  private extractData(res: Response) {
    console.log(res.toString())
    let body = res.json();
    console.log(res.json());
    return body;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
