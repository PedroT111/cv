import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  socialMedia = DATA.contact;
  constructor() { }

  ngOnInit(): void {
  }

}
