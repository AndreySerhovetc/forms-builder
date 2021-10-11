import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShareServiceService {
  counter = 0;

  constructor() { }

  public drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let copy = Object.assign({}, event.previousContainer.data[event.previousIndex]);
      copy.id = this.counter++;
      event.previousContainer.data[event.previousIndex] = copy;
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      console.log( event.container.data)
    }
  }
}
