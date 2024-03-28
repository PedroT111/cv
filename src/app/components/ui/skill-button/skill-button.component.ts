import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-button',
  templateUrl: './skill-button.component.html',
  styleUrls: ['./skill-button.component.css']
})
export class SkillButtonComponent implements OnInit {
  @Input() skill: string;
  @Input() isDarkTheme: boolean = false;
  @Input() size: 'small' | 'medium' | 'large';
  constructor() { }

  ngOnInit(): void {
  }

}
