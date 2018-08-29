import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './custom-module.module';
import { AppComponent } from './app.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { SigupPortalComponent } from './sigup-portal/sigup-portal.component';
import { FormsModule, NgForm, NgControl } from '@angular/forms';
import { NgFormDirective } from './ng-form.directive'; // <-- NgModel lives here





@NgModule({
  declarations: [
    AppComponent,
    LoginPortalComponent,
    SigupPortalComponent,
    NgFormDirective
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      {path: 'login', component:LoginPortalComponent},
      { path: 'signup', component: SigupPortalComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
