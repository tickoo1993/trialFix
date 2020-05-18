import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/index';
import { Router } from '@angular/router';
@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public authenticationService: AuthenticationService, public router: Router) { }










  
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
