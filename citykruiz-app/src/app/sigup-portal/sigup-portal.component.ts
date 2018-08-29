import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CustomMaterialModule } from '../custom-module.module';

@Component({
  selector: 'app-sigup-portal',
  templateUrl: './sigup-portal.component.html',
  styleUrls: ['./sigup-portal.component.css']
})
export class SigupPortalComponent implements OnInit {

  public phoneLen;
  iconValue = 'phone';

  constructor() {
    this.phoneLen.valueChanges.subscribe((val) => {
      this.phoneLen = val.toString().lenght;
      console.log(this.phoneLen);
    });
  }

  ngOnInit() {
  }

}
