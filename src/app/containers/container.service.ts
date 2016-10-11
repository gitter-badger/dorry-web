import { Injectable, Injector } from '@angular/core';
import { Headers, Http, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Container } from './container';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContainerService {
  private origin = 'http://localhost:4243';
  private paramRunning = '/containers/json?all=0';
  private paramAll = '/containers/json?all=1';
  private toBeRemoved = '/containers/{id}?v=1?force=1';

  constructor(private http: Http) { }

  getRunningContainers(): Promise<Container[]> {
    return this.http.request(
      new Request({
        method: RequestMethod.Get,
        url: this.origin + this.paramRunning
      }))
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getAllContainers(): Promise<Container[]> {
    return this.http.request(
      new Request({
        method: RequestMethod.Get,
        url: this.origin + this.paramAll
      }))
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  removeContainer(id: string) {
    return this.http.request(
      new Request({
        method: RequestMethod.Delete,
        url: this.origin + this.toBeRemoved.replace("{id}", id)
      }))
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
