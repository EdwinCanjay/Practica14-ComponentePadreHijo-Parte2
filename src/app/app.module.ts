import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContactComponent } from './pages/contact/contact.component';
//import { AboutComponent } from './pages/about/about.component';
//import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';
import { HttpClient, HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    /*ContactComponent,
    AboutComponent,
    HomeComponent,*/
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
