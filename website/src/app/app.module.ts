import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicationsComponent } from './publications/publications.component';
import { BiosModule } from './bios/bios.module';
import { HomepageModule } from './homepage/homepage.module';
import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BiosModule,
    HomepageModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
