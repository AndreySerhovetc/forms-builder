import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-info-element',
  templateUrl: './info-element.component.html',
  styleUrls: ['./info-element.component.scss'],
})
export class InfoElementComponent implements OnInit, OnDestroy {
  public currentElement: any;
  public typeInput: string = '';
  public objElement: any;
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

  onSelect(key: any, event: Event): void {
    this.objElement = this.currentElement.style;
    this.objElement[key] = (<HTMLInputElement>event.target).value;
  }

  changeInputType(key: any) {
    if (key === 'backgroundColor' || key === 'color') {
      return 'color';
    } else if (key === 'required') {
      return 'checkbox';
    } else {
      return 'text';
    }
  }

  hideInfo(id: number) {
    if (this.currentElement.id === id) {
      this.currentElement = null;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
