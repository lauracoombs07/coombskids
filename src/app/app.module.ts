import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SawyerComponent } from './sawyer/sawyer.component';
import { CameronComponent } from './cameron/cameron.component';
import { KylieComponent } from './kylie/kylie.component';
import { GraysonComponent } from './grayson/grayson.component';
import { AlexiaComponent } from './alexia/alexia.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SawyerComponent,
    CameronComponent,
    KylieComponent,
    GraysonComponent,
    AlexiaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
