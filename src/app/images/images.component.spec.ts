/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { ImagesComponent, initImages, getImageInfoes } from './images.component';

describe('Component: Images', () => {
  it('should create an instance', () => {
    let component = new ImagesComponent();
    expect(component).toBeTruthy();
  });

  it('should init image bind image img url', () => {
    let initImageData = initImageData();
    expect(initImageData).toBeTruthy();
  });

  it('should return images object', fakeAsync(() => {
    let images1 = getImageInfoes();
    tick();
    let images2 = getImageInfoes();
    expect(images1).toBe(images2);
  }));
});
