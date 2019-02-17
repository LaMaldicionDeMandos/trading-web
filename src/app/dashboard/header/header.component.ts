import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared/services/shared.service";

import {AuthService} from "../../auth.service";

@Component({
  selector: 'lazuly-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnInit {
  maThemeModel: string = 'green';
  schoolName: string;

  setTheme() {
    this.sharedService.setTheme(this.maThemeModel)
  }

  constructor(private sharedService: SharedService, private authService: AuthService) {
    sharedService.maThemeSubject.subscribe((value) => {
      this.maThemeModel = value
    });
  }

  ngOnInit() {
    this.schoolName = this.authService.getCredentials().school_name;
    this.setTheme();
  }
}
