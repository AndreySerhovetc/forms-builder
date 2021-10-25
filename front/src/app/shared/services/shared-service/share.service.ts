import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Element } from '../../interfaces/element';
@Injectable({
  providedIn: 'root',
})
export class ShareService {

  public drop(event: CdkDragDrop<Element[]>) {
    if (event.previousContainer !== event.container) {
      const clone = JSON.parse(
        JSON.stringify(event.previousContainer.data[event.previousIndex]),
      );
      clone.id = new Date().getTime();
      event.container.data.splice(event.currentIndex, 0, clone);
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
