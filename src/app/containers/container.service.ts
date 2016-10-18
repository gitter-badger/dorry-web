import { Injectable, Injector } from '@angular/core';
import { Headers, Http, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Container } from './container';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContainerService {
  private origin = 'http://172.17.0.1:4243';
  private paramRunning = '/containers/json?all=0';
  private paramStopped = '/containers/json?filters={"status":["exited"]}';
  private paramError = '/containers/json?filters={"status":["exited","dead","restarting"]}';
  private paramAll = '/containers/json?all=1';
  private toBeRemoved = '/containers/{id}?v=1?force=1';
  private toBeStopped = '/containers/{id}/stop?t=5';
  private toBeRestarted = '/containers/{id}/restart?t=5';

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

  getStoppedContainers(): Observable<Container[]> {
    return this.http.request(
      new Request({
        method: RequestMethod.Get,
        url: this.origin + this.paramStopped
      }))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getErrorContainers(): Promise<Container[]> {
    return this.http.request(
      new Request({
        method: RequestMethod.Get,
        url: this.origin + this.paramError
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
      .toPromise();
  }

  stopContainer(id: string) {
    return this.http.request(
      new Request({
        method: RequestMethod.Post,
        url: this.origin + this.toBeStopped.replace("{id}", id)
      }))
      .toPromise();
  }

  restartContainer(id: string) {
    return this.http.request(
      new Request({
        method: RequestMethod.Post,
        url: this.origin + this.toBeRestarted.replace("{id}", id)
      }))
      .toPromise();
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
