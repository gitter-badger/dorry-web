import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainersComponent } from './containers/containers.component';
import { ImagesComponent } from './images/images.component';

import { HttpService } from './http.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainersComponent,
    ImagesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
