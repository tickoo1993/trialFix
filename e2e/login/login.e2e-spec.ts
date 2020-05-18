import { LoginPage } from './login.po';
// import { HomePage } from '../home/home.po';
import { HomePage } from '../home/home.po';
describe('protactor-assignment - Login page', () => {
  let page: LoginPage;
  let homePage: HomePage;

  const wrongCred = {
    username: 'incorrectusername',
    password: 'incorrectpassword'
  };

  beforeEach(() => {
    page = new LoginPage();
    homePage = new HomePage();
  });

  it('when user opens our app he should see the default “login” screen', () => {
    page.navigateTo();
    expect(page.getPageTitleText()).toEqual('Login');
  });

  it('when user tries to login with wrong credentials he should stay on the “login” page', () => {
    page.navigateTo();
    page.fillCredentials(wrongCred);
    expect(page.getPageTitleText()).toEqual('Login');
    expect(page.getErrorMessage()).toEqual('Username or password is incorrect');
  });

  it('when login is successful, user should be redirected to "home" page', () => {
    page.navigateTo();
    page.fillCredentials();
    expect(homePage.getPageTitleText()).toEqual('Home');
  });
});
