import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransferService {
  public selectedElement$ = new Subject<Element>()
  public listElements$: any[] = []

  public changeSelectElement(element: any) {
    this.selectedElement$.next(element)
  }

  public addElementToList(element: any): void {
    this.listElements$.push(element)
  }

  constructor() { }
}
