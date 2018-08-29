import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../custom-module.module';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { fadeIn } from './animate';

@Component({
  selector: 'app-desktop-screen',
  templateUrl: './desktop-screen.component.html',
  styleUrls: ['./desktop-screen.component.css'],
  animations:[
    fadeIn
  ]
})
export class DesktopScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
