import { Component, ElementRef,NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { RatingModule } from "ng2-rating";
import {Ng2PaginationModule} from 'ng2-pagination';
import {ModalModule,Modal} from "ng2-modal";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public dlat:number;
  public dlon:number;
  public latitude: number;
  public SearchPlaces: string="Edappally";
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public type:string;
  public list: any[]=[];
  public taxis: any[]=
  [
  {latitude:10.02669,longitude:76.3088819,DriverName:'Josh',number:9633086558},
  {latitude:10.0224555,longitude:76.3099666,DriverName:'Jacob',number:9633086558}
  ];
  public rate:number=4;
  public rating: number[] = [];
  @ViewChild("search")
  public searchElementRef: ElementRef;
  open() {
      //  this.modal.open();
    }
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  
  ngOnInit() {
    //set google maps defaults
    
    this.zoom = 15;
    this.latitude = 10.0236761;
    this.longitude = 76.3116235;
    this.dlat=this.latitude;
    this.dlon=this.longitude;
    
    //set current position
    this.setCurrentPosition();
  
    
  }



  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        this.type ="restaurant";
      });
    }
  }
}
