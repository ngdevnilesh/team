import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  users = [
    {
      name: 'Robert Whitstable',
      role: 'Product Manager',
      projects: 24,
      tasks: 132,
      insights: 31,
      image: 'user.jpg'
    },
    {
      name: 'Emily Clarkson',
      role: 'UI/UX Designer',
      projects: 18,
      tasks: 89,
      insights: 27,
      image: 'user.jpg'
    },
    {
      name: 'John Doe',
      role: 'Software Engineer',
      projects: 30,
      tasks: 150,
      insights: 45,
      image: 'user.jpg'
    },
    {
      name: 'Sophia Bennett',
      role: 'Marketing Lead',
      projects: 12,
      tasks: 78,
      insights: 22,
      image: 'user.jpg'
    },
    {
      name: 'Michael Grant',
      role: 'Data Analyst',
      projects: 15,
      tasks: 120,
      insights: 35,
      image: 'user.jpg'
    },
    {
      name: 'Anna Johnson',
      role: 'Quality Assurance Engineer',
      projects: 20,
      tasks: 95,
      insights: 28,
      image: 'user.jpg'
    },
    {
      name: 'Chris Anderson',
      role: 'DevOps Engineer',
      projects: 22,
      tasks: 110,
      insights: 40,
      image: 'user.jpg'
    },
    {
      name: 'Jessica Lee',
      role: 'Content Strategist',
      projects: 10,
      tasks: 60,
      insights: 18,
      image: 'user.jpg'
    }
  ];
}
