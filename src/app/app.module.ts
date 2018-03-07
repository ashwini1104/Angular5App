import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { DataService } from './../service/data.service';
import { ChildComponent } from './child/child.component';

const appRoute:Routes=[
    {
        path:'',
        component:HomeComponent
    },
    {
      path:'about',
      component:AboutComponent
    }
];

@NgModule({
  declarations: [ AppComponent,HomeComponent, AboutComponent, ChildComponent ],
  imports: [ BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(appRoute) ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
