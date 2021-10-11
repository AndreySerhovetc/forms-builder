import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { addSelectElement } from 'src/reducers/selectedElement';
import { Element } from '../Element';
import { ShareServiceService } from '../share-service.service';

@Component({
  selector: 'app-drop-field',
  templateUrl: './drop-field.component.html',
  styleUrls: ['./drop-field.component.scss']
})

export class DropFieldComponent implements OnInit {
  dropElements: Element[] = [];

  constructor(
    private share: ShareServiceService,
    private store: Store
    ) { }

  ngOnInit(): void {
  }

  onSelected(element: any): void {
    this.store.dispatch(addSelectElement(element))
  }

  deleteElement (id: number) {
    this.dropElements = this.dropElements.filter((item: Element) => item.id !== id)
   }

  onDrop(event: CdkDragDrop<Element[]>) {
    this.share.drop(event);
  }
}
