import { DashboardPortalComponent } from './dashboard-portal/dashboard-portal.component';
import { ActiavtionPortalComponent } from './actiavtion-portal/actiavtion-portal.component';

import { LoginPortalComponent } from './login-portal/login-portal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordPortalComponent } from './reset-password-portal/reset-password-portal.component';



const routes: Routes = [
  { path: 'login', component: LoginPortalComponent },
  { path: 'reset', component: ResetPasswordPortalComponent },
  { path: 'activate', component: ActiavtionPortalComponent},
  {path: 'dashboard', component: DashboardPortalComponent }
];

@NgModule({

 imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
