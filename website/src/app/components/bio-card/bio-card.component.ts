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
    @Input() person: Person = {name: "", type: "", bio: "", title: "", image: ""}; 

    constructor(private dialog: MatDialog){}

    openBioDialog(person: Person) {
        this.dialog.open(BioDialogComponent, {
          data: person 
        });
        console.log(person)
      }

    openLink(url: string) {
        window.open(url, "_blank")
    }

    openEmail(email: string) {
        window.open(`mailto:${email}`);
    }
    
    handleImageError(event: any) {
      console.log('Failed to load image', event);
      event.target.src = '../../../assets/default_headshot.jpeg';
    }
      
      
  }