import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransferService } from '../shared/services/transfer-service/transfer.service';
import { Element, Style } from '../shared/interfaces/element';

@Component({
  selector: 'app-info-element',
  templateUrl: './info-element.component.html',
  styleUrls: ['./info-element.component.scss'],
})
export class InfoElementComponent implements OnInit, OnDestroy {
  public currentElement!: Element | null;
  public styleObject!: Partial<Style>;
  public items = ['Info', 'Change element'];
  private destroyAll: Subject<any> = new Subject<any>();

  constructor(private transfer: TransferService) {}

  ngOnInit(): void {
    this.transfer.selectedElement$
      .pipe(takeUntil(this.destroyAll))
      .subscribe((res) => {
        this.currentElement = res;
      });

    this.transfer.deleteId$
      .pipe(takeUntil(this.destroyAll))
      .subscribe((id) => {
        this.hideInfo(id);
      });
  }

  onSelect(obj: { key: string; value: string }): void {
    const { key, value } = obj;

    if (this.currentElement?.style) {
      this.styleObject = this.currentElement.style;
      this.styleObject[key] = value;
    }
  }

  hideInfo(id: number): void {
    if (this.currentElement?.id === id) {
      this.currentElement = null;
    }
  }

  ngOnDestroy(): void {
    this.destroyAll.next();
    this.destroyAll.complete();
  }
}
