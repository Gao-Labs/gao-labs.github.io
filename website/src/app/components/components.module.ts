import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BioDialogComponent } from './bio-dialog/bio-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    // other components
    BioDialogComponent,
    NavbarComponent
  ],
  imports: [
    // other modules
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    BioDialogComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
