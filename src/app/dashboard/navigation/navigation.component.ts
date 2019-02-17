import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import { SharedService } from "../../shared/services/shared.service";

import {AuthService} from "../../auth.service";
import {Credentials} from "../../credentials";

@Component({
    selector: 'lazuly-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [
        trigger('toggleHeight', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})

export class NavigationComponent implements OnInit {
    USER_CRUD:string = "user_crud";
    sidebarVisible: boolean;
    crudUserPermission: boolean;

    // Sub menu visibilities
    navigationSubState:any = {
        Tables: 'inactive',
        Forms: 'inactive',
        SamplePages: 'inactive',
        UserInterface: 'inactive',
        Components: 'inactive',
        Charts: 'inactive',
    };

    firstName:string;
    lastName:string;
    name:string;
    email:string;


    // Toggle sub menu
    toggleNavigationSub(menu, event) {
        event.preventDefault();
        this.navigationSubState[menu] = (this.navigationSubState[menu] === 'inactive' ? 'active' : 'inactive');
    }

    constructor(private sharedService: SharedService, private authService: AuthService) {
        sharedService.sidebarVisibilitySubject.subscribe((value) => {
            this.sidebarVisible = value
        })
    }

    ngOnInit() {
      let credentials:Credentials = this.authService.getCredentials();
      this.firstName = credentials.first_name;
      this.lastName = credentials.last_name;
      this.name = `${this.firstName} ${this.lastName}`.trim();
      this.email = credentials.email;

      this.authService.hasPermission(this.USER_CRUD).subscribe((has) => {
        console.log("has user_crud? " + has);
        this.crudUserPermission = has;});
    }

    logout():void {
      this.authService.logout();
    }
}
