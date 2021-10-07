import { Component, OnInit } from '@angular/core';
import { Element } from '../Element';

@Component({
  selector: 'app-drop-field',
  templateUrl: './drop-field.component.html',
  styleUrls: ['./drop-field.component.scss']
})

export class DropFieldComponent implements OnInit {
  elements: Element[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
