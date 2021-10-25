import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FieldTypes } from '../../shared/enums/field-type';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Input() key = '';

  @Input() value: string | boolean = '';

  @Output() valueChange = new EventEmitter<any>();

  onChange(event: Event) {
    const key = this.key;
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

    this.valueChange.emit(currentKeyValue);
  }

  keys(): string[] {
    return Object.keys(FieldTypes);
  }
}
