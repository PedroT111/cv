import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: string = DATA.about;
  constructor() { }

  ngOnInit(): void {
  }

}
