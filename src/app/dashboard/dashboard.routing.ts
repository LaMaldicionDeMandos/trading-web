import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
    { path: '', component: DashboardComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: '../modules/shares/shares.module#SharesModule' },
    ]}
];

export const DashboardRouting = RouterModule.forChild(DASHBOARD_ROUTES);
