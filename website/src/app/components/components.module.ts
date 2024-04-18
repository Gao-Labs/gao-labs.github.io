import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BioDialogComponent } from './bio-dialog/bio-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BioCardComponent } from './bio-card/bio-card.component';



@NgModule({
  declarations: [
    BioDialogComponent,
    NavbarComponent,
    BioCardComponent
  ],
  imports: [
    // other modules
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    CommonModule
  ],
  exports: [
    BioDialogComponent,
    NavbarComponent,
    BioCardComponent
  ]
})
export class ComponentsModule { }
