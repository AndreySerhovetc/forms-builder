import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomInputService {
  public changedKeyValue$ = new Subject<{ key: string, value: string | boolean }>();

  changeElementStyle(event: Event, key: string) {
    let newValue: string | boolean;

    if ((<HTMLInputElement>event.target).checked) {
      newValue = true;
    } else {
      newValue = false;
    }

    if (key !== 'required') {
      newValue = (<HTMLInputElement>event.target).value;
    }

    const currentKeyValue = {
      key,
      value: newValue,
    };

    this.changedKeyValue$.next(currentKeyValue);
  }
}
