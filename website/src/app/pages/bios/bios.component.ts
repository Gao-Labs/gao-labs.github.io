import { Component } from '@angular/core';
import { people } from 'src/app/consts/bios.const';
import { FilterByTypePipe } from 'src/app/pipes/filter-by-type.pipe';
import { Person } from 'src/app/types/Person.type';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css'],
})
export class BiosComponent {

  imageDir = '../../assets/headshots/';
  public searchValue = ""

  
  getLastName(person: Person): string {
    const name = person.name.replace(", PhD", "")
    const nameParts = name.split(' ');
    return nameParts[nameParts.length - 1];
  }
  
  sortedPeople = people.sort((a, b) => {
    const lastNameA = this.getLastName(a).toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const lastNameB = this.getLastName(b).toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;
    return 0;
  });
  
  filteredPeople = this.sortedPeople

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




}