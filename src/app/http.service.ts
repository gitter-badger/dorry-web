import { Injectable } from '@angular/core';
import { Headers, Http, Response, Jsonp, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {
  private address = 'http://localhost:4243';

  //docker remote api part
  private listImages = '/images/json?all=0';//[GET]  list images
  private removeImages = '/images/{id}?force=1';//[DELETE]  remove image ,add image id after the url

  //define request header to use CORS
  // headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
  // options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  //get all heroes info from docker daemon
  getImageInfoes() {
    return this.http.get(this.address + this.listImages)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  //remove image by image id
  removeImage(id: string) {
    return this.http.delete(this.address + this.removeImages.replace("{id}", id))
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
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
