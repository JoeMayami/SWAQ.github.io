import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LoginPortalComponent } from './login-portal/login-portal.component';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    LoginPortalComponent
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
