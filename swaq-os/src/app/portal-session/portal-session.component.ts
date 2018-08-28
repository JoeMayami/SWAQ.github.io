import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPortalComponent } from '../login-portal/login-portal.component';
import { ResetPasswordPortalComponent } from '../reset-password-portal/reset-password-portal.component';
import { LockScreenComponent } from '../lock-screen/lock-screen.component';
import { ActiavtionPortalComponent } from '../actiavtion-portal/actiavtion-portal.component';

@NgModule({
  declarations: [
    PortalSessionComponent,
    LoginPortalComponent,
    ResetPasswordPortalComponent,
    LockScreenComponent,
    ActiavtionPortalComponent
  ],
  imports: [CommonModule]
})
@Component({
  selector: 'app-portal-session',
  templateUrl: './portal-session.component.html',
  styleUrls: ['./portal-session.component.css']
})

export class PortalSessionComponent implements OnInit {

  public loginShow:boolean = true;
  public lockShow:boolean = false;
  public passwordShow:boolean = false;
  public activateShow:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
