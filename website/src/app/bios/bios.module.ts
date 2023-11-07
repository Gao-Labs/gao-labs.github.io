import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BiosComponent } from './bios.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BiosComponent],
  imports: [MatCardModule, CommonModule],
  exports: [BiosComponent],
})
export class BiosModule {}
