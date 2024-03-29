import { Component, OnInit } from '@angular/core';
import { MI_CAFE_DATA } from 'src/app/data/miCafeApp';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {
  projectData = MI_CAFE_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
