import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data/data';
import { Education } from 'src/app/interfaces/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = DATA.education;
  constructor() { }

  ngOnInit(): void {
  }

}
