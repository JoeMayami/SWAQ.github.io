import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})
@NgModule({
  imports: [CommonModule],
  declarations: [LoginPortalComponent]

})
export class LoginPortalComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
