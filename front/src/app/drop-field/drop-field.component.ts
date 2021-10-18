import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit} from '@angular/core';
// import { Store } from '@ngrx/store';
// import { addSelectElement } from 'src/reducers/selectedElement';
import { Element } from '../Element';
import { ShareServiceService } from '../share-service.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-drop-field',
  templateUrl: './drop-field.component.html',
  styleUrls: ['./drop-field.component.scss']
})

export class DropFieldComponent implements OnInit {
  dropElements: Element[] = [];
  arraySelectElements: Element[] = this.transfer.listElements$;
  currentElement?:any = this.transfer.selectedElement$;
  objStyle?: any = {}

  constructor(
    private share: ShareServiceService,
    private transfer: TransferService,
    // private store: Store
    ) {}

  ngOnInit(): void {
    this.transfer.selectedElement$.subscribe (
      res => this.currentElement = res
    )
  }


  onSelected(element: any): void {
    this.transfer.changeSelectElement(element)
    // this.store.dispatch(addSelectElement(element))
  }

  deleteElement (id: number) {
    this.dropElements = this.dropElements.filter((item: Element) => item.id !== id)
   }

  onDrop(event: CdkDragDrop<Element[]>) {
    this.share.drop(event);
  }
}
