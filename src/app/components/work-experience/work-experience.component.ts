import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data/data';
import { Job } from 'src/app/interfaces/job';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  works: Job[] = DATA.jobs;
  constructor() { }

  ngOnInit(): void {
  }

}
