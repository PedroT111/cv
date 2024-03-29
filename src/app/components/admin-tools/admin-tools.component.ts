import { Component, OnInit } from '@angular/core';
import { MI_CAFE_DATA } from 'src/app/data/miCafeApp';

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit {
  data = MI_CAFE_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
