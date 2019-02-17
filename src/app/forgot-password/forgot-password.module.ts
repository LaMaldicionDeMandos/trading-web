import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from "./forgot-password.component";
import {FormsModule} from "@angular/forms";
import {AlertModule} from "ngx-bootstrap";

const FORGOT_ROUTES = [
    { path: '', component: ForgotPasswordComponent }
];

@NgModule ({
    declarations: [
        ForgotPasswordComponent],
    imports: [
      CommonModule,
      AlertModule.forRoot(),
      RouterModule.forChild(FORGOT_ROUTES),
      FormsModule
    ],
    entryComponents: [ ]
})

export class ForgotPasswordModule {  }
