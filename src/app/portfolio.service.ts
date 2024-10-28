import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  projects = [{
    id: 1,
    name: 'Indoor Naviagtion',
    description: 'The visual-based navigation system uses the devices camera to help scan markers (QR codes) in the environment to determine orientation and position. Project implemented with Rust, ReactJS, and the use of Lambda Twist algorithm to be used in mobile browsers',
    link: 'https://github.com/ElchinFarhad/Indoor-Navigation'
  }, {
    id: 2,
    name: 'Online exam registration | Full Stack',
    description: 'Web application for students to register for available exams on the system and for teachers to manage and grade students. The front end is developed using ReactJS and the back end with Nodejs and MySql',
    link: "https://github.com/ElchinFarhad/Exam-Reservation-Portal"
  },
  {
    id: 3,
    name: 'Awesome Pizza | Microservices',
    description: 'These are Spring Boot applications for managing pizza orders and processing order messages using Kafka for queue management.',
    link: "https://github.com/ElchinFarhad/AwesomePizza"
  },
  ];

  constructor() { }

  getProjectById(id: number): Observable<any> {
    const project = this.projects.find(p => p.id === id);
    return of(project);
  }

  getAllProjects(): Observable<any> {
    return of(this.projects);
  }
}
