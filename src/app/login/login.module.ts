import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LoginComponent } from "./login.component";
import {FormsModule} from "@angular/forms";
import {AlertModule} from "ngx-bootstrap";

const LOGIN_ROUTES = [
    { path: '', component: LoginComponent }
];

@NgModule ({
    declarations: [
        LoginComponent],
    imports: [
      CommonModule,
      AlertModule.forRoot(),
      ModalModule.forRoot(),
      RouterModule.forChild(LOGIN_ROUTES),
      FormsModule
    ],
    entryComponents: [ ]
})

export class LoginModule {  }
