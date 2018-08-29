import { RouterModule, Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { MatInputModule } from '@angular/material/input';
import { trigger, transition, animate, style } from '@angular/animations';
import { PortalSessionComponent } from './portal-session/portal-session.component';

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


  public splashShow:boolean = true;
  title = 'swaq-os';

   constructor( private router: Router) { 
     if (this.splashShow == true){
        setTimeout(() => {
        //  this.router.navigate(['/login']);
          return this.splashShow = false;
        }, 5000);
      }
    }

}
