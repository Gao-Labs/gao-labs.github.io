import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomepageComponent],
  imports: [MatCardModule],
  exports: [HomepageComponent], 

})
export class HomepageModule { }
