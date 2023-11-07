import { NgModule } from '@angular/core';
import { PublicationsComponent } from './publications.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PublicationsComponent],
  exports: [PublicationsComponent],
  imports: [MatCardModule, CommonModule, MatButtonModule],
})
export class PublicationsModule {}
