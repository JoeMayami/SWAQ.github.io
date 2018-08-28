import { CustomMaterialModule } from './../custom-module.module';
import { Component, OnInit, NgModule } from '@angular/core';







@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})

<<<<<<< HEAD
})
 
=======
>>>>>>> eb01b2cf0905bd9bfad3ac560d70cdfd0f8dee24
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




