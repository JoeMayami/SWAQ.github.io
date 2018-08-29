  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { SigupPortalComponent } from './sigup-portal/sigup-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPortalComponent,
    SigupPortalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
