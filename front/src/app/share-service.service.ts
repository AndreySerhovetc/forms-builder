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
      const clone = JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]));
      clone.id = this.counter++;
      event.previousContainer.data[event.previousIndex] = clone;
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
