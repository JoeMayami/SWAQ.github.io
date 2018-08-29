import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../custom-module.module'


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  foods: Food[] = [
    {value: 'franchise', viewValue: 'Franchise'},
    // {value: 'marketer', viewValue: 'Marketer'},
    // {value: 'staff', viewValue: 'Staffs'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
