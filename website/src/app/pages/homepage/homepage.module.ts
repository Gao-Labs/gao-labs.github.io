import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomepageComponent],
  imports: [MatCardModule, MatButtonModule],
  exports: [HomepageComponent], 

})
export class HomepageModule { }
