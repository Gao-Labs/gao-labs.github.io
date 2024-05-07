import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../types/Person.type';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {
  transform(people: Person[], types: string[]): Person[] {
    return people.filter(person => types.includes(person.type));
}
}
