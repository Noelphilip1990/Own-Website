import { Component,OnChanges,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit{
  title = 'Events';
  status:boolean=false;
  constructor(private router: Router){
   
   
  }
  ngOnInit()
  {
	
  }
  ngOnChanges(changes) {
    //this.status=
   // console.log("Status check:"+this.au.canActivate());// changes.prop contains the old and the new value...
  }
  
}
