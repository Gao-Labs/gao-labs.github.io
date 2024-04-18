import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BiosComponent } from './pages/bios/bios.component';
import { PublicationsComponent } from './pages/publications/publications.component';

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
