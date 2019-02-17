import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedService } from "./shared/services/shared.service";
import { routing } from './app.routing';
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./users.service";
import {ProfileService} from "./profile.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    SharedService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthService,
    UsersService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
