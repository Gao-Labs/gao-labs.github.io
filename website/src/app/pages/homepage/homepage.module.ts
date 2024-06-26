import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomepageComponent],
  imports: [MatCardModule, MatButtonModule, RouterModule],
  exports: [HomepageComponent], 

})
export class HomepageModule { }
