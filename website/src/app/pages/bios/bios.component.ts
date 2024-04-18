import { Component } from '@angular/core';
import { Person } from 'src/app/types/Person.type';


@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css'],
})
export class BiosComponent {

  imageDir = '../../assets/headshots/';

  coreStaff: Person[] = [
    {
      name: 'Dr. H. Oliver Gao',
      title: 'Lab Head',
      bio: 'Dr. Gao is the Director of the Cornell Systems Engineering and Howard Simpson Professor of Engineering at Cornell University. Gao is an international leading expert in urban infrastructure, transportation, and health (environmental  health, public health) systems analytics/modeling and innovation for healthy living in smart communities. His research focuses on urban technology, data science, integrated computational engineering models, and trans-disciplinary systems solutions for intelligent urban systems, low carbon and low emission transportation, and human-centered urban design for environment and public health. He is an elected member in the graduate fields of 1) Civil and Environmental Engineering, 2) Computer Science and Engineering; 3) Air Quality in Earth and Atmospheric Science, and 4) Systems Engineering at Cornell University.',
      image: this.imageDir + 'oliver-group.jpg',
    },
    {
      name: 'Dr. Tim Fraser',
      title: 'Research Associate',
      bio: 'Timothy (Tim) Fraser is a research associate with the Systems Engineering Program at Cornell University. He is a computational social scientist, studying how communities can reduce their emissions and improve their resilience. He has authored 40 peer-reviewed studies and five chapters on urban resilience, disasters, energy, health, and the pandemic in the US and Japan. His recent has been funded by multiple external grants from Fulbright & the Natural Hazards Center, as well as internal grants from Northeastern University. Prior to Cornell, he taught as an instructor and earned his Ph.D. in political science from Northeastern University from 2017 to 2022. In 2016, he was a Fulbright Fellow at Kyushu University, Japan. Tim teaches statistics and research methods, using examples from environmental policy, and enjoys leading research with undergraduates and master’s students. He also runs tutorials on data science in R.',
      image: this.imageDir + 'Fraser_headshot_2022 - 560x560.jpg',
    },
    {
      name: 'Erin Murphy',
      title: 'Program Analyst',
      bio: 'Erin is one of the staff developers at Gao Labs.',
      image: this.imageDir + 'erin-headshot.png',
    },
    // Add more people as needed
  ];

  phdStudents: any[] = [
    
  ];
  mastersStudents: any[] = [
    
  ];
}
