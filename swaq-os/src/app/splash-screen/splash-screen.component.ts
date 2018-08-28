import { Component, OnInit } from '@angular/core';
import { ActionData } from '../actionData';
import { trigger, transition, animate, style } from '@angular/animations'



@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class SplashScreenComponent implements OnInit {

  data = ActionData;
  constructor() { }

  ngOnInit() {
  }

}
