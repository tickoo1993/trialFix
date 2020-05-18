import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';


describe('LoginComponent', () => {
  let service: AuthenticationService;
  let router: Router;

  beforeEach(() => {
    service = new AuthenticationService();
  })

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should call the checkCredentials method', () => {
    spyOn(service.currentUserSubject, 'next');
    spyOn(service, 'checkCredentials');
    let model = { username: 'kartiktickoo', password: '1234' }
    let d = service.login(model.username, model.password);
    d.subscribe((f) => {
      expect(service.checkCredentials).toHaveBeenCalled();

    });
  });

  it('should call call the subscriber, if the user is authentic', () => {
    spyOn(service.currentUserSubject, 'next');
    let model = { username: 'kartiktickoo', password: '1234' }
    let d = service.login(model.username, model.password);
    d.subscribe((f) => {
      expect(service.currentUserSubject.next).toHaveBeenCalled();

    });
  });

  it('when user tries to login with right credentials, result should be true', () => {
    let model = { username: 'kartiktickoo', password: '1234' }
    let result = service.checkCredentials(model.username, model.password);

    expect(result).toBeTruthy();
  });

  it('when user tries to login with wrong credentials, result should be false', () => {
    let model = { username: 'kartiktickoo', password: '12345' }
    let result = service.checkCredentials(model.username, model.password);
    expect(result).toBeFalsy();
  });

  it('should call the logout method', () => {
    spyOn(service.currentUserSubject, 'next');
    service.logout();
    expect(service.currentUserSubject.next).toHaveBeenCalled();
  });

  it('should call the currentuservalue method', () => {
    expect(service.currentUserValue).toBeDefined();
  });
})