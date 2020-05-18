import { browser, by, element } from 'protractor';

export class LoginPage {
  private cred = {
    username: 'kartiktickoo',
    password: '1234'
  };

  navigateTo() {
    return browser.get('/login');
  }

  fillCredentials(cred: any = this.cred) {
    element(by.css('[name="username"]')).sendKeys(cred.username);
    element(by.css('[name="password"]')).sendKeys(cred.password);
    element(by.css('.btn-primary')).click();
  }

  getPageTitleText() {
    return element(by.css('app-root h2')).getText();
  }

  getErrorMessage() {
    return element(by.css('.alert-danger')).getText();
  }

  logOut() {
    return element(by.css('a[href="/login"]')).click();
  }
}
