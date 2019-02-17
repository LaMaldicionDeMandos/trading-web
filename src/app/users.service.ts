import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../environments/environment';
import {User} from "./model/user";
import {AuthService} from "./auth.service";

@Injectable()
export class UsersService {
  private url = `${environment.api_uri}/users`;

  constructor(private http:HttpClient, private authService:AuthService) { }

  getUsers():Observable<User[]> {
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `bearer ${this.authService.getAccessToken()}`);
    const options = {headers: headers};
    return this.http.get(this.url, options);
  }

  changeUser(user:User):Observable<any> {
    console.log('Call to change user ');
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `bearer ${this.authService.getAccessToken()}`);
    const options = {headers: headers};
    console.log(`uri: ${this.url}/${user.email}`);
    let result:Observable<any> = this.http.put(`${this.url}/${user.email}`, user, options);
    result.subscribe(() => console.log('Andu!!'), (err) => console.log(`Error: ${err}`));
    return result;
  }

  deleteUser(user:User):Observable<any> {
    console.log('Call to delete user ' + user.email);
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `bearer ${this.authService.getAccessToken()}`);
    const options = {headers: headers};
    console.log(`uri: ${this.url}/${user.email}`);
    let result:Observable<any> = this.http.delete(`${this.url}/${user.email}`, options);
    result.subscribe(() => console.log('Andu!!'), (err) => console.log(`Error: ${err}`));
    return result;
  }

  addUser(user:User):Observable<User> {
    console.log('Call to add user ' + user.email);
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `bearer ${this.authService.getAccessToken()}`);
    const options = {headers: headers};
    console.log(`uri: ${this.url}`);
    let request = {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      job_title: user.job_title,
      roles: user.roles.map((role) => role.code)
    };
    let result:Observable<User> = this.http.post(this.url, request, options);
    result.subscribe(() => console.log('Andu!!'), (err) => console.log(`Error: ${err}`));
    return result;
  }

}
