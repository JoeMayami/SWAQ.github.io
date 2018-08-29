import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CustomMaterialModule } from './custom-module.module';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ActiavtionPortalComponent } from './actiavtion-portal/actiavtion-portal.component';
import { ResetPasswordPortalComponent } from './reset-password-portal/reset-password-portal.component';
import { DashboardPortalComponent } from './dashboard-portal/dashboard-portal.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule, MatToolbarModule} from '@angular/material';
import { DesktopScreenComponent } from './desktop-screen/desktop-screen.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { QuickAccessDashboardComponent } from './quick-access-dashboard/quick-access-dashboard.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginPortalComponent,
    LockScreenComponent,
    ActiavtionPortalComponent,
    ResetPasswordPortalComponent,
    DashboardPortalComponent,
    AdminViewComponent,
    DesktopScreenComponent,
    ProfileDashboardComponent,
    QuickAccessDashboardComponent,
    BasicInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    CustomMaterialModule,
    MatToolbarModule,
    MatTooltipModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {path: '', redirectTo:'/splash', pathMatch:'full'},
      {path: 'splash', component: SplashScreenComponent},
      {path: 'login-portal', component: LoginPortalComponent},
      {path: 'lock-screen', component: LockScreenComponent},
      {path: 'activate-account', component: ActiavtionPortalComponent},
      {path: 'reset-password', component: ResetPasswordPortalComponent},
      {path: 'desktop-screen', component: DesktopScreenComponent},
      {path: 'dashboard-screen', component: DashboardPortalComponent},
      {path: 'profile-dashboard', component: ProfileDashboardComponent},
      {path: 'admin-view', component: AdminViewComponent},
    


    ]),

  ],
  providers: [ ],

  bootstrap: [AppComponent]

})

export class AppModule { }
