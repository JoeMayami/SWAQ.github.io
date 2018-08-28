
import {MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule],
})
export class CustomMaterialModule {
    // ...
}