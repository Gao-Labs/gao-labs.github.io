import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BiosComponent } from './bios.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BiosComponent],
  imports: [MatCardModule, CommonModule, MatButtonModule],
  exports: [BiosComponent],
})
export class BiosModule {}
