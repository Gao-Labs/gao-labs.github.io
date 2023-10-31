import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BiosModule } from './bios/bios.module';
import { HomepageModule } from './homepage/homepage.module';
import { NavbarModule } from './navbar/navbar.module';
import { PublicationsModule } from './publications/publications.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BiosModule,
    PublicationsModule,
    HomepageModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
