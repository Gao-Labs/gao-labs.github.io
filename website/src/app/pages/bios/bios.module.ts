import { NgModule } from '@angular/core';
import { BiosComponent } from './bios.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; 
import { FilterByTypePipe } from 'src/app/pipes/filter-by-type.pipe';



@NgModule({
  declarations: [BiosComponent, FilterByTypePipe],
  imports: [CommonModule, ComponentsModule, MatInputModule, MatIconModule, FormsModule],
  exports: [BiosComponent],
})
export class BiosModule {}
