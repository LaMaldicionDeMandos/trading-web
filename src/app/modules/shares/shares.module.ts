import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from '../../shared/shared.module';

import { SharesComponent } from './shares.component';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';

const SHARES_ROUTE = [
    { path: '', component: SharesComponent }
];

@NgModule ({
    declarations: [
        SharesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        FormsModule,
        RouterModule.forChild(SHARES_ROUTE)
    ]
})

export class SharesModule {  }
