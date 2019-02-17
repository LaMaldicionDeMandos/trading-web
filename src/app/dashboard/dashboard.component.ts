import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'lazuly-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  maTheme: string = this.sharedService.maTheme;

  constructor(private sharedService: SharedService) {
    sharedService.maThemeSubject.subscribe((value) => {
      this.maTheme = value
    })
  }

  ngOnInit() {
  }

}
