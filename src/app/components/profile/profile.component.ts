import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data/data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = DATA.name;
  role: string = DATA.role;
  socialMedia = DATA.contact;
  location: string = DATA.location;
  icon_location: string = DATA.icon_location;
  img: string = DATA.img
  constructor() { }

  ngOnInit(): void {
  }

}
