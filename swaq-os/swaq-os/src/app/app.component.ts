import { RouterModule, Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { MatInputModule } from '@angular/material/input';
import { trigger, transition, animate, style } from '@angular/animations';


// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
  
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
  title = 'swaq-os';

   constructor( private router: Router) { 
    
    }

}
