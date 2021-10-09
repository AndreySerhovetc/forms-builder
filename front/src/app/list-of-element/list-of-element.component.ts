
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSelectElement } from 'src/reducers/selectedElement';
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
    private store: Store,
    private share: ShareServiceService
    ) { }

  ngOnInit(): void {
    this.getElements()
  }

  // onSelected(element: any): void {
  //   this.store.dispatch(addSelectElement(element));
  // }

  onDrop(event: CdkDragDrop<Element[]>) {
    this.share.drop(event);
  }
}
