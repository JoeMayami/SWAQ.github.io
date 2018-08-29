import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup } from '@angular/forms';
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
import { AdminViewComponent } from './admin-view/admin-view.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule, MatToolbarModule} from '@angular/material';


 
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
    AdminViewComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    CustomMaterialModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'splash', component: SplashScreenComponent},
      {path: 'portal', component: PortalSessionComponent},
      {path: 'login-portal', component: LoginPortalComponent},
      {path: 'lock-screen', component: LockScreenComponent},
      {path: 'actiave-account', component: ActiavtionPortalComponent},
      {path: 'reset-password', component: ResetPasswordPortalComponent},
    ])

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
