import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Element } from './Element';
import { Elements } from './mock-elements';

@Injectable({
  providedIn: 'root'
})

export class ElementService {

  constructor() { }

  getElements(): Observable<Element[]> {
    const elements = of(Elements)

    return elements
  }
}
