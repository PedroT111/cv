import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() iconClass: string;
  @Input() href: string | undefined;
  @Input() routerLink: string | undefined;
  @Input() isDarkIcon: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
