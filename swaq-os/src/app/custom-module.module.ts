
import {MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, 
    MatGridListModule, MatIconModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, 
    MatGridListModule, MatIconModule, MatFormFieldModule],
})
export class CustomMaterialModule {
    // ...
}