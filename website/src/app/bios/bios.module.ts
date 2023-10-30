import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BiosComponent } from './bios.component';

@NgModule({
  declarations: [BiosComponent],
  imports: [MatCardModule],
  exports: [BiosComponent]
})
export class BiosModule { }
