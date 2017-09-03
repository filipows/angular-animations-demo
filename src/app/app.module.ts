import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Route1Component } from './route1/route1.component';
import { AppRoutingModule } from './app-routing.module';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route4Component } from './route4/route4.component';
import { AnimateComponent } from './animate/animate.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Route1Component,
    Route2Component,
    Route3Component,
    Route4Component,
    AnimateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
