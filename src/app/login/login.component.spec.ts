import { LoginComponent } from './login.component';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let service: AuthenticationService;
    let router: Router;

    beforeEach(() => {
        service = new AuthenticationService();
        component = new LoginComponent(router, service);
    })

    it('should create the login component', () => {
        expect(component).toBeTruthy();
    });

    it('should call the login method false', () => {
        spyOn(service, 'login').and.returnValue(of(false));
        component.model = { username: 'kartiktickoo', password: '1234' }
        component.login();
        expect(service.login).toHaveBeenCalled();
        expect(component.error).toEqual('Username or password is incorrect');
    });

    it('should call the login method', () => {
        spyOn(service, 'login').and.returnValue(of(false));
        component.model = { username: 'kartiktickoo', password: '1234' }
        component.login();
        expect(service.login).toHaveBeenCalled();
    });

    it('loading to be false', () => {
        component.login();
        expect(component.loading).toBeFalsy();
    });
})