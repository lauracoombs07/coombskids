import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlexiaComponent } from './alexia/alexia.component';
import { CameronComponent } from './cameron/cameron.component';
import { GraysonComponent } from './grayson/grayson.component';
import { KylieComponent } from './kylie/kylie.component';
import { SawyerComponent } from './sawyer/sawyer.component';


const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'alexia', component: AlexiaComponent},
  { path: 'cameron', component: CameronComponent},
  { path: 'grayson', component: GraysonComponent},
  { path: 'kylie', component: KylieComponent},
  { path: 'sawyer', component: SawyerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
