import { Injectable } from '@angular/core';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../_models';


@Injectable()
export class AuthenticationService {
  public token: string;
  public redirectUrl;
  public userCred: User = { id: 1, username: 'kartiktickoo', password: '1234', firstName: 'Kartik', lastName: 'Tickoo' };
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<boolean> {
    return new Observable(observer => {
        const isValidUser = this.checkCredentials(username, password)
        if (isValidUser) {
          localStorage.setItem('currentUser', JSON.stringify({ 'firstname': username }));
          this.currentUserSubject.next(this.userCred);
        }
        observer.next(isValidUser);
    });
  }

  checkCredentials(username: string, password: string, userCred = this.userCred) {
    if (username === userCred.username && password === userCred.password) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
