import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/types/Person.type';

@Component({
  selector: 'app-bio-dialog',
  templateUrl: './bio-dialog.component.html',
  styleUrls: ['./bio-dialog.component.css'],

})
export class BioDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public person: Person) {}
}
