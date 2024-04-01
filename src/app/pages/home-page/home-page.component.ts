import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  projects = [{
    name: 'Project One',
    description: 'This is the description for the first project.'
  }, {
    name: 'Project Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Project Three',
    description: 'Description for third project.'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
