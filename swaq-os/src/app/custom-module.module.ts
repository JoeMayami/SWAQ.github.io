
import {MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';








@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, 
    MatGridListModule, MatIconModule, MatSidenavModule, MatFormFieldModule, MatRadioModule,
    MatTableModule, MatPaginatorModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatInputModule, 
    MatGridListModule, MatIconModule, MatSidenavModule, MatFormFieldModule, MatRadioModule,
    MatTableModule, MatPaginatorModule, MatSelectModule ],
})
export class CustomMaterialModule {
    // ...
}