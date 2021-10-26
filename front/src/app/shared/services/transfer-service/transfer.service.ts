import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Element } from '../../interfaces/element';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  public selectedElement$ = new Subject<Element>();
  public deleteId$ = new Subject<number>();

  public changeSelectElement(element: Element): void {
    this.selectedElement$.next(element);
  }
  public deleteElementId(id: number): void {
    this.deleteId$.next(id);
  }
}
