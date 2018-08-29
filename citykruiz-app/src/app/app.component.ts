import { Component, NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 


// @NgModule decorator with its metadata
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
  title = 'citykruiz-app';

  constructor(private router: Router){

  }
}
