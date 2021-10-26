import { Injectable } from '@angular/core';
import { TransferService } from '../shared/services/transfer-service/transfer.service';
import { Element } from '../shared/interfaces/element';
import { ShareService } from '../shared/services/shared-service/share.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class DropFieldService {
  public dropElements: Element[] = [];

  constructor(private transfer: TransferService, private share: ShareService) {}

  public addSelectElement(element: Element) {
    this.transfer.changeSelectElement(element);
    this.deleteElement(element.id!);
  }

  public deleteElement(id: number) {
    this.dropElements = this.dropElements.filter(
      (item: Element) => item.id !== id
    );
    this.addDeleteId(id);
  }

  public addDeleteId(id: number) {
    this.transfer.deleteElementId(id);
  }

  onDrop(event: CdkDragDrop<Element[]>): void {
    this.share.drop(event);
  }
}
