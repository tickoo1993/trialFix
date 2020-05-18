import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/homePage');
  }

  getPageTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  logOut() {
    return element(by.css('#loginButton')).click();
  }
}
