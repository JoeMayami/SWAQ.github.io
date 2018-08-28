import { Component, OnInit, NgModule } from '@angular/core';



@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})

export class LoginPortalComponent implements OnInit {

  onClick(event){
    console.log(event);
    console.log(event.srcElement.attributes.id);
    var idAttr = event.srcElement.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
        
  }

  constructor() { 
    
  }


  ngOnInit() {
  }

}
