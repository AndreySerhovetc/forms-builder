import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransferService } from '../shared/services/transfer-service/transfer.service';
// import { Element } from '../shared/interfaces/element';

@Component({
  selector: 'app-info-element',
  templateUrl: './info-element.component.html',
  styleUrls: ['./info-element.component.scss'],
})
export class InfoElementComponent implements OnInit, OnDestroy {
  public currentElement?: any;

  public styleObject: any;

  public items = ['Info', 'Change element'];

  public expandedIndex = 0;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private transfer: TransferService) {}

  ngOnInit(): void {
    this.transfer.selectedElement$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res) => {
        this.currentElement = res;
      });

    this.transfer.deleteId$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((id) => {
        this.hideInfo(id);
      });
  }

  onSelect(obj: { key: string; value: string }): void {
    let { key, value } = obj;
    this.styleObject = this.currentElement.style;
    this.styleObject[key] = value;
  }

  hideInfo(id: number): void {
    if (this.currentElement) {
      if (this.currentElement.id === id) {
        this.currentElement = {};
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
