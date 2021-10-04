import { Component, OnInit } from '@angular/core';
import { Element } from '../Element';
import { ElementService } from '../element.service';


@Component({
  selector: 'app-list-of-element',
  templateUrl: './list-of-element.component.html',
  styleUrls: ['./list-of-element.component.scss']
})


export class ListOfElementComponent implements OnInit {

  elements: Element[] = [];
  selectedElement?: Element;

  onSelected(element: Element): void {
    this.selectedElement = element;
  }

  getElements(): void {
    this.elementService.getElements()
      .subscribe(elements => this.elements = elements)
  }

  constructor(private elementService: ElementService) { }

  ngOnInit(): void {
    this.getElements();
  }

}
