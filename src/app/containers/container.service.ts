import { Injectable } from '@angular/core';
import { Container } from './container';
import { CONTAINERS } from './mock-containers';

@Injectable()
export class ContainerService {

  constructor() { }

  getContainers(): Promise<Container[]> {
    return Promise.resolve(CONTAINERS);
  }

  getContainer(name: string): Promise<Container> {
    return this.getContainers().then(containers => containers.find(container => container.name === name));
  }
}
