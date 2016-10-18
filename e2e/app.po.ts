import { browser, element, by } from 'protractor/globals';

export class DorryWebPage {
  navigateToHome() {
    return browser.get('/');
  }

  navigateToService() {
    return browser.get('/');
  }

  getMasthead() {
    return element(by.css('app-masthead')).getText();
  }

  getFooter() {
    return element(by.css('app-footer')).getText();
  }

  getErrorServiceHeader() {
    return element(by.css('span.service-header-left')).getText();
  }

  getRemoveAll() {
    return element(by.css('span.service-header-right')).getText();
  }

  getStoppedServiceHeader() {
    return element(by.css('app-containers div:nth-child(2)')).getText();
  }

  getRunningServiceHeader() {
    return element(by.css('app-containers div:nth-child(4)')).getText();
  }
}
