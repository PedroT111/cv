import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {
  @Input() form : FormGroup;
  @Input() inputName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
