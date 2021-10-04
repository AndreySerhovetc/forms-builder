import { Component, Input, OnInit } from '@angular/core';
import { Element } from '../Element';

@Component({
  selector: 'app-info-element',
  templateUrl: './info-element.component.html',
  styleUrls: ['./info-element.component.scss']
})

export class InfoElementComponent implements OnInit {
  @Input() element?: Element;

  constructor() { }

  ngOnInit(): void {
  }

}
