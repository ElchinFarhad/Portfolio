import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = +params['id'];
      this.projectService.getProjectById(projectId).subscribe(project => {
        this.project = project;
      });
    });
  }
}
