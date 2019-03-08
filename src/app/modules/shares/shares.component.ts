import {Component, OnInit} from '@angular/core';

const typeDecorator = Component({
  selector: 'app-shares',
  styleUrls: ['./shares.component.scss'],
  templateUrl: './shares.component.html'
});


@typeDecorator

export class SharesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
