import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule , JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RatingModule } from "ng2-rating";
import { Ng2PaginationModule } from 'ng2-pagination';
import { ModalModule } from "ng2-modal";
import { routing } from './app.Routes';
import { RegistrationService } from './registration-service.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent

  ],
  imports: [
    Ng2PaginationModule,
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    HttpModule,
    ModalModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtzk4UHVyc9hvEuMPJdPH5xu4xVfRA7s',
      libraries: ["places"]
    })
    
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
