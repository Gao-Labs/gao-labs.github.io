import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  onBiosButtonClick() {
    this.router.navigateByUrl(`bios`);
  }
}
