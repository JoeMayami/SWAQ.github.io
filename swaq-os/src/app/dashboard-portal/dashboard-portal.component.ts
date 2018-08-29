import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../custom-module.module';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { fadeIn } from '../animate';

@Component({
  selector: 'app-dashboard-portal',
  templateUrl: './dashboard-portal.component.html',
  styleUrls: ['./dashboard-portal.component.css']
})
export class DashboardPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
