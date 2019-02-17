import { Component, OnInit } from '@angular/core';
import {User} from "./forgot-password.model";
import {AuthService} from "../auth.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lazuly-forgot-password',
  styleUrls: ['./forgot-password.component.scss'],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  user:User = new User();
  errors:boolean;
  bkErrors:boolean;
  private token:string;
  constructor(private activated:ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.token = this.activated.snapshot.queryParams['token'];
  }

  send(): void {
    this.errors = false;
    this.bkErrors = false;
    console.log(`restore password -> password: ${this.user.password}, repassword: ${this.user.rePassword}, token: ${this.token}.`);
    if (this.user.password !== this.user.rePassword) return this.showErrors();
    this.authService.restorePassword(this.token, this.user.password).subscribe(
      () => this.goToLogin(),
      (error) => this.bkErrors = true);

  }

  private goToLogin(): void {
    this.router.navigate(['/login']);
  }

  private showErrors(): void {
    this.errors = true;
  }

}
