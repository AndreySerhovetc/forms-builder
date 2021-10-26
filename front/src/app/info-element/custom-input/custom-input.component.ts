import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FieldTypes } from '../../shared/enums/field-type';
import { CustomInputService } from './custom-input.service';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [CustomInputService],
})
export class CustomInputComponent implements OnInit, OnDestroy {
  @Input() key = '';
  @Input() value: string | boolean = '';
  @Output() valueChange = new EventEmitter<any>();

  public newKeyValue!: {key: string, value: string | boolean};
  private destroyAll: Subject<any> = new Subject<any>();

  constructor(private customService: CustomInputService) {}

  ngOnInit() {
    this.customService.changedKeyValue$
      .pipe(takeUntil(this.destroyAll))
      .subscribe((res) => (this.newKeyValue = res));
  }

  onChange(event: Event) {
    this.customService.changeElementStyle(event, this.key);
    this.valueChange.emit(this.newKeyValue);
  }

  keysInputType(): string[] {
    return Object.keys(FieldTypes);
  }

  ngOnDestroy(): void {
    this.destroyAll.next();
    this.destroyAll.complete();
  }
}
