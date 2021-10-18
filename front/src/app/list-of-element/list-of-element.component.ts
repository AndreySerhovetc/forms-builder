
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../share-service.service';
import { Element } from '../Element';
import { ElementService } from '../element.service';


@Component({
  selector: 'app-list-of-element',
  templateUrl: './list-of-element.component.html',
  styleUrls: ['./list-of-element.component.scss']
})


export class ListOfElementComponent implements OnInit {
  elements: Element[] = [];
  currentDragItem: any

  getElements(): void {
    this.elementService.getElements()
      .subscribe(elements => this.elements = elements)
  }

  constructor(
    private elementService: ElementService,
    private share: ShareServiceService
    ) { }

  ngOnInit(): void {
    this.getElements()
  }

  onDrop(event: CdkDragDrop<Element[]>) {
    this.share.drop(event);
  }
}
