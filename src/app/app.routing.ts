import { Routes, RouterModule } from '@angular/router';
import {AuthService} from "./auth.service";

const ROUTES: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
    { path: 'demo', loadChildren: './layout/layout.module#LayoutModule' },
    { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthService] }
];

export const routing = RouterModule.forRoot(ROUTES);
