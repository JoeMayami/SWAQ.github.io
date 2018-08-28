import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPortalComponent } from '../login-portal/login-portal.component';
import { ResetPasswordPortalComponent } from '../reset-password-portal/reset-password-portal.component';
import { LockScreenComponent } from '../lock-screen/lock-screen.component';
import { ActiavtionPortalComponent } from '../actiavtion-portal/actiavtion-portal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginPortalComponent },
  { path: 'reset', component: ResetPasswordPortalComponent },
  { path: 'activate', component: ActiavtionPortalComponent }
];

@NgModule({
  declarations: [
    PortalSessionComponent,
    LoginPortalComponent,
    ResetPasswordPortalComponent,
    LockScreenComponent,
    ActiavtionPortalComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
@Component({
  selector: 'app-portal-session',
  templateUrl: './portal-session.component.html',
  styleUrls: ['./portal-session.component.css']
})

export class PortalSessionComponent implements OnInit {
   
  
  constructor() {
      
   }

  ngOnInit() {
  }

}
