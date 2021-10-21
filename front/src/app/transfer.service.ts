import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  public selectedElement$ = new Subject<Element>();
  public deleteId$ = new Subject<number>();

  public changeSelectElement(element: Element) {
    this.selectedElement$.next(element);
  }

  public deleteElementId(id: any): void {
    this.deleteId$.next(id);
  }

  constructor() {}
}
