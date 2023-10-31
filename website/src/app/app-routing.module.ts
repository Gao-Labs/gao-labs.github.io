import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BiosComponent } from './bios/bios.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'bios', component: BiosComponent },
  { path: 'publications', component: PublicationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
