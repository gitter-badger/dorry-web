import { browser, element, by } from 'protractor/globals';

export class DorryWebPage {
  /**************************************************************************
   * Web navigation
   **************************************************************************/
  navigateToHome() {
    return browser.get('/');
  }

  navigateToService() {
    return browser.get('/');
  }

  navigateToApp() {
    return browser.get('/apps');
  }

  /***************************************************************************
   * Testing static text contents
   **************************************************************************/
  getMasthead() {
    return element(by.css('app-masthead')).getText();
  }

  getFooter() {
    return element(by.css('app-footer')).getText();
  }

  getErrorServiceHeader() {
    return element(by.css('div.error-service-header span.service-header-left')).getText();
  }

  getRemoveAll() {
    return element(by.css('div.error-service-header span.service-header-right')).getText();
  }

  getStoppedServiceHeader() {
    return element(by.css('div.stopped-service-header')).getText();
  }

  getRunningServiceHeader() {
    return element(by.css('div.running-service-header')).getText();
  }

  /***************************************************************************
   * Counting services in status of error, stopped and running
   **************************************************************************/
  getErrorServiceCount() {
    return element.all(by.css('div.error-service-container')).count();
  }

  getStoppedServiceCount() {
    return element.all(by.css('div.stopped-service-container')).count();
  }

  getRunningServiceCount() {
    return element.all(by.css('div.running-service-container')).count();
  }

  /***************************************************************************
   * Removing, restarting and stoppping a service
   **************************************************************************/
  removeAll() {
    element(by.css('.error-service-header .service-header-right')).click();
    return element(by.css('.error-service-header .service-header-right')).getText();
  }

  removeService(index: number) { }

  stopService(index: number) { }

  restartService(index: number) { }

}
