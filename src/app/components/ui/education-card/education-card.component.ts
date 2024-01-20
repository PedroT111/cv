import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/interfaces/education';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {
  @Input() education: Education;
  constructor() { }

  ngOnInit(): void {
  }

}
