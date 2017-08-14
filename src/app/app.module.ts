import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent } from './app.component';
import {HeroService} from './hero.service';
import {HeroDetailsComponent} from './hero-details.component';
import { HeroComponent } from './hero.component';
import {DashboardComponent} from './dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailsComponent,
    DashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AppRoutingModule,
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
