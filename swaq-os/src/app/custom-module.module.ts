
import {MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';






@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, 
    MatGridListModule, MatIconModule, MatSidenavModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, 
    MatGridListModule, MatIconModule, MatSidenavModule, MatFormFieldModule ],
})
export class CustomMaterialModule {
    // ...
}