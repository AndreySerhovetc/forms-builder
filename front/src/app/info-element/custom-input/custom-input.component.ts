import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldTypes } from '../../shared/enums/field-type';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Input() key: any = '';

  @Input() value: any = '';

  @Output() valueChange = new EventEmitter<any>();

  public fileTypes = Object.keys(FieldTypes);

  public type: string = '';


  onChange(event: Event) {
    const currentKeyValue = {
      key: this.key,
      value: (<HTMLInputElement>event.target).value,
    };

    // if ((<HTMLInputElement>event.target).checked) {
    //   currentKeyValue.value = 'true';
    // } else {
    //   currentKeyValue.value = 'false';
    // }
    this.valueChange.emit(currentKeyValue);
  }

  // changeInputType() {
  //   for (let type of this.fileTypes) {

  //   }
  // }
}
