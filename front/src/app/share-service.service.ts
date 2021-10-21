import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ShareServiceService {
  public counter = 0;

  constructor() {}

  public drop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      const clone = JSON.parse(
        JSON.stringify(event.previousContainer.data[event.previousIndex])
      );
      clone.id = new Date().getTime();
      event.container.data.splice(event.currentIndex, 0, clone);
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
