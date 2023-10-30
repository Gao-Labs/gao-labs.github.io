import { Component } from '@angular/core';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css']
})
export class BiosComponent {
  people: any[] = [
    {
      name: 'John Doe',
      bio: 'John Doe is a professor at our university. He specializes in...',
      // Add more properties like 'image' for headshots if you have image URLs.
    },
    {
      name: 'Jane Smith',
      bio: 'Jane Smith is a postdoctoral researcher working on...',
    },
    {
      name: 'Bob Johnson',
      bio: 'Bob Johnson is an associate professor focusing on...',
    },
    // Add more people as needed
  ];

}
