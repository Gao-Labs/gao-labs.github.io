import { Component, Input } from "@angular/core";
import { BioDialogComponent } from '../../components/bio-dialog/bio-dialog.component';
import { MatDialog } from "@angular/material/dialog";
import { Person } from "src/app/types/Person.type";


@Component({
    selector: 'app-bio-card',
    templateUrl: './bio-card.component.html',
    styleUrls: ['./bio-card.component.css'],
  })
  export class BioCardComponent {
    @Input() person: Person = {name: "", bio: "", title: "", image: ""}; 

    constructor(private dialog: MatDialog){}



    openBioDialog(person: Person) {
        this.dialog.open(BioDialogComponent, {
          data: person 
        });
        console.log(person)
      }
  }