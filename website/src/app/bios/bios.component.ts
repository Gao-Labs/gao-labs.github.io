import { Component } from '@angular/core';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css'],
})
export class BiosComponent {
  imageDir = '../../assets/headshots/';

  coreStaff: any[] = [
    {
      name: 'Dr. H. Oliver Gao',
      title: 'Professor etc',
      bio: 'Dr. Gao is the Director of the Cornell Systems Engineering and Howard Simpson Professor of Engineering at Cornell University. Gao is an international leading expert in urban infrastructure, transportation, and health (environmental  health, public health) systems analytics/modeling and innovation for healthy living in smart communities. His research focuses on urban technology, data science, integrated computational engineering models, and trans-disciplinary systems solutions for intelligent urban systems, low carbon and low emission transportation, and human-centered urban design for environment and public health. He is an elected member in the graduate fields of 1) Civil and Environmental Engineering, 2) Computer Science and Engineering; 3) Air Quality in Earth and Atmospheric Science, and 4) Systems Engineering at Cornell University.',
      image: this.imageDir + 'oliver-group.jpg',
    },
    {
      name: 'Dr. Tim Fraser',
      title: 'Postdoc etc',
      bio: 'bio bio bio',
      image: this.imageDir + 'Fraser_headshot_2022 - 560x560.jpg',
    },
    {
      name: 'Erin Murphy',
      title: 'Program Analyst',
      bio: 'Erin is one of the staff developers at Gao Labs.',
      image: this.imageDir + 'erin-headshot.png',
    },
    {
      name: 'Bob Johnson',
      title: 'PhD Student',
      bio: 'Bob Johnson is a PhD student focusing on...',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      name: 'Bob Johnson',
      title: 'PhD Student',
      bio: 'Bob Johnson is a PhD student focusing on...',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      name: 'Bob Johnson',
      title: 'PhD Student',
      bio: 'Bob Johnson is a PhD student focusing on...',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    // Add more people as needed
  ];

  phdStudents: any[] = [
    {
      name: 'Bob Johnson',
      title: 'PhD Student',
      bio: 'Bob Johnson is a PhD student focusing on...',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      name: 'Bob Johnson',
      title: 'PhD Student',
      bio: 'Bob Johnson is a PhD student focusing on...',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];
  mastersStudents: any[] = [
    {
      name: 'Bob Johnson',
      title: 'PhD Student',
      bio: 'Bob Johnson is a PhD student focusing on...',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      name: 'Bob Johnson',
      title: 'PhD Student',
      bio: 'Bob Johnson is a PhD student focusing on...',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];
}
