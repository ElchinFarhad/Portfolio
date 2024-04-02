import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectService.getAllProjects().subscribe(project => {
        this.projects = project;
      });
    });
  }



}
