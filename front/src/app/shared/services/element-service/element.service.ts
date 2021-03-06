import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Element } from '../../interfaces/element';
import { Elements } from '../../mock-elements';

@Injectable({
  providedIn: 'root',
})
export class ElementService {

  getElements(): Observable<Element[]> {
    const elements = of(Elements);

    return elements;
  }
}
