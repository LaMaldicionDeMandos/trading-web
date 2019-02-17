import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";

import { TeachersComponent } from "./teachers.component";

const TEACHERS_ROUTE = [
    { path: '', component: TeachersComponent }
];

@NgModule ({
    declarations: [
        TeachersComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(TEACHERS_ROUTE)
    ]
})

export class TeachersModule {  }
