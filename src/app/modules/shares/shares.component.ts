import {Component, OnInit} from '@angular/core';
import {ApiClient} from '../../services/api_client';

const typeDecorator = Component({
  selector: 'app-shares',
  styleUrls: ['./shares.component.scss'],
  templateUrl: './shares.component.html'
});


@typeDecorator

export class SharesComponent implements OnInit {
    constructor(private apiClient: ApiClient) {}
    // TODO Esto obtenerlo del local storage, de lo contrario settear el primero de la lista
    private current_index = 'BCBA';
    private indexes: String[];
    ngOnInit() {
      this.apiClient.getIndexes().subscribe((indexes) => this.indexes = indexes);
    }
}
