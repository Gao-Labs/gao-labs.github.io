import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BioDialogComponent } from './bio-dialog.component';

@NgModule({
  declarations: [
    // other components
    BioDialogComponent
  ],
  imports: [
    // other modules
    MatDialogModule
  ],
})
export class ComponentsModule { }
