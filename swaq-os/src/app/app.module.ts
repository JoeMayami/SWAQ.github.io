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
import { DashboardPortalComponent } from './dashboard-portal/dashboard-portal.component';
import { DesktopScreenComponent } from './desktop-screen/desktop-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginPortalComponent,
    PortalSessionComponent,
    LockScreenComponent,
    ActiavtionPortalComponent,
    ResetPasswordPortalComponent,
    DashboardPortalComponent,
    DesktopScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    CustomMaterialModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'splash', component: SplashScreenComponent},
      {path: 'portal', component: PortalSessionComponent},
      {path: 'login-portal', component: LoginPortalComponent},
      {path: 'lock-screen', component: LockScreenComponent},
      {path: 'actiave-account', component: ActiavtionPortalComponent},
      {path: 'reset-password', component: ResetPasswordPortalComponent},
      {path: 'desktop-screen', component: DesktopScreenComponent},


    ]),

   
  ],

  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
