import { Injectable } from '@angular/core';
import { Element } from '../shared/interfaces/element';

@Injectable({
  providedIn: 'root',
})
export class DropFieldService {

  filterDropList(dropList: Element[], id: number): Element[] {
    return dropList.filter((item: Element) => item.id !== id);
  }
}
