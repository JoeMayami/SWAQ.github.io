import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
<<<<<<< HEAD
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { MatInputModule } from '@angular/material/input';
import { trigger, transition, animate, style } from '@angular/animations';

=======
import { PortalSessionComponent } from './portal-session/portal-session.component';
>>>>>>> eb01b2cf0905bd9bfad3ac560d70cdfd0f8dee24

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    PortalSessionComponent
  ],
})
@NgModule({
  imports: [CommonModule],
  declarations: [AppComponent]

})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {

  public loginShow:boolean = false;
  public splashShow:boolean = true;
  title = 'swaq-os';

   constructor() {
     if (this.splashShow == true){
        setTimeout(() => {
          return this.loginShow = true, this.splashShow = false;
        }, 5000);
      }
    }

}
