import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../environments/environment';
import {Profile} from "./model/profile";
import {AuthService} from "./auth.service";

@Injectable()
export class ProfileService {
  private url = `${environment.api_uri}/profiles/me`;

  constructor(private http:HttpClient, private authService:AuthService) { }

  get():Observable<Profile> {
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `bearer ${this.authService.getAccessToken()}`);
    const options = {headers: headers};
    return this.http.get(this.url, options);
  }

  change(profile:Profile):Observable<Profile> {
    console.log('Call to change profile ');
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `bearer ${this.authService.getAccessToken()}`);
    const options = {headers: headers};
    console.log(`uri: ${this.url}`);
    let result:Observable<any> = this.http.put(this.url, profile, options);
    result.subscribe(() => console.log('Andu!!'), (err) => console.log(`Error: ${err}`));
    return result;
  }

}
