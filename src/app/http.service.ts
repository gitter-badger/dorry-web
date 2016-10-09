import { Injectable } from '@angular/core';
import { Headers, Http, Response, Jsonp, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  private address = 'http://localhost:4243';
  private imagesUrl = '/images/json?all=0';

  constructor(private http: Http) { }

  //get all image info from docker deamon
  // getImageInfo() {
  //   return this.jsonp
  //     .get(this.address + this.imagesUrl)
  //     .map(response => <string[]>response.json()[1]);
  //
  // }

  //get all heroes info from docker daemon
  getImageInfoes() {
    //let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    //let options = new RequestOptions({ headers: headers });
    return this.http.get(this.address + this.imagesUrl)
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
