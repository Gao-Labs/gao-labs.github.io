import { Component } from '@angular/core';
import { people } from 'src/app/consts/bios.const';
import { Person } from 'src/app/types/Person.type';


@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css'],
})
export class BiosComponent {

  imageDir = '../../assets/headshots/';
  public searchValue = ""
  

  onSearch(searchTerm: string) {
    let tempPeople = people;
    console.log("searching with term " + searchTerm)
    if (searchTerm) {
      tempPeople = tempPeople.filter((person) =>
        person.name
          ? person.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          : false
      );
    }
    this.filteredPeople = tempPeople;
  }


filteredPeople = people

}