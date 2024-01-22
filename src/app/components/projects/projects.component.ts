import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data/data';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectList: Project[] = DATA.projects;
  constructor() { }

  ngOnInit(): void {
  }

}
