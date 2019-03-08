import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class ApiClient {
  getIndexes(): Observable<String[]> {
    return Observable.of(['BCBA', 'NASDAQ']);
  }
}
