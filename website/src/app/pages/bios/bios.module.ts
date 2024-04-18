import { NgModule } from '@angular/core';
import { BiosComponent } from './bios.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [BiosComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [BiosComponent],
})
export class BiosModule {}
