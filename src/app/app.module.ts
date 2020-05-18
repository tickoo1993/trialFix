import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthenticationService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
