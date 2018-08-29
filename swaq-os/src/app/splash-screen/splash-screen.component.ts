import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { fadeIn } from '../animate';
import { RouterLinkActive, Routes, Router } from '@angular/router';




@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  animations: [
    fadeIn
  ]
})
export class SplashScreenComponent implements OnInit {

    public loadingText: string = 'Loading';
    
    public openOrclose:string;
    private timeSplash = 0;
    private count = 0;
    constructor(private nav: Router) { }

  ngOnInit(): void {
    setInterval(() => {
        if (this.timeSplash < 16000){
          this.openOrclose='enter'
          this.timeSplash += 5000;
         if(this.count === 5){
          this.openOrclose='enter'
           this.count = 0;
           this.loadingText = "Loading";
         } else {
          this.openOrclose='leave'
           this.loadingText = "";
           var content:string[]; 
            content = ["Getting started","Setting up enviroinment","Fetching data","Synchronizing", "Almost done"];
          this.loadingText += content[this.count] ;
          this.count++;
         }
        } else {
          this.openOrclose='leave'
          this.nav.navigate(['/login-portal'], {replaceUrl: true});
        }
    }, 5000)
  }

}
