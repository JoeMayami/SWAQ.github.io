import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CustomMaterialModule } from './custom-module.module';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { PortalSessionComponent } from './portal-session/portal-session.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ActiavtionPortalComponent } from './actiavtion-portal/actiavtion-portal.component';
import { ResetPasswordPortalComponent } from './reset-password-portal/reset-password-portal.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginPortalComponent,
    PortalSessionComponent,
    LockScreenComponent,
    ActiavtionPortalComponent,
    ResetPasswordPortalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    CustomMaterialModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: '', component: SplashScreenComponent},
      {path: '', component: LoginPortalComponent},
      {path: '', component: PortalSessionComponent},
      {path: '', component: LockScreenComponent},
      {path: '', component: ActiavtionPortalComponent},
      {path: '', component: ResetPasswordPortalComponent},



    ])

  ],

  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
