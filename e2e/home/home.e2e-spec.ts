import { HomePage } from './home.po';
import { LoginPage } from '../login/login.po';

describe('protactor-assignment - Protected page', () => {
  let page: HomePage;
  let loginPage: LoginPage;

  beforeEach(() => {
    page = new HomePage();
    loginPage = new LoginPage();
  });

  it('when non authenticated user tries to access “home” page he should be redirect to “login” page', () => {
    loginPage.navigateTo();
    loginPage.fillCredentials();
    page.logOut();
    page.navigateTo();
    expect(loginPage.getPageTitleText()).toEqual('Login');
  });

  it(`when a non authenticated user tries to access “home” page, user will be redirected to “login” screen, after successful
   login user should be redirected to “home” page`, () => {

    page.navigateTo();
    loginPage.fillCredentials();
    expect(page.getPageTitleText()).toEqual('Home');
  });
});