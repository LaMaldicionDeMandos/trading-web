import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";
import { DashboardRouting } from "./dashboard.routing";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ButtonsModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { DashboardComponent } from "./dashboard.component";
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationTriggerComponent } from './header/navigation-trigger/navigation-trigger.component';

import { LazulyAvatarModule } from '../modules/avatar/lazuly-avatar.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

@NgModule ({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationTriggerComponent
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    FormsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    ButtonsModule.forRoot(),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    LazulyAvatarModule.forRoot()
  ]
})

export class DashboardModule {  }
