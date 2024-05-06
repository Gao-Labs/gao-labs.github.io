import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BiosModule } from './pages/bios/bios.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { PublicationsModule } from './pages/publications/publications.module';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BiosModule,
    PublicationsModule,
    HomepageModule,
    MatButtonModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
