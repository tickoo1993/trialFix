import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_services/auth.guard';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'homePage', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**',redirectTo: '/login', pathMatch: 'full'  }
];

export const routing = RouterModule.forRoot(appRoutes);