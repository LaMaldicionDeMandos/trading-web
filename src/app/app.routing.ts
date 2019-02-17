import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
];

export const routing = RouterModule.forRoot(ROUTES);
