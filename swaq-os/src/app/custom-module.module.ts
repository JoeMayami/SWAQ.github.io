import { MatGridListModule } from '@angular/material/grid-list';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule ],
  // tslint:disable-next-line:max-line-length
  exports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule ],
})
export class CustomMaterialModule {
    // ...
}