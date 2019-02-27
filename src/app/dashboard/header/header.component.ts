import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared/services/shared.service";

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

  constructor(private sharedService: SharedService) {
    sharedService.maThemeSubject.subscribe((value) => {
      this.maThemeModel = value
    });
  }

  ngOnInit() {
    this.setTheme();
  }
}
