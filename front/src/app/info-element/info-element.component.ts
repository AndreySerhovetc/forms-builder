import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { addSelectElementSelector } from 'src/reducers/selectedElement';
// import { addSelectElementSelector } from 'src/reducers/selectedElement';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-info-element',
  templateUrl: './info-element.component.html',
  styleUrls: ['./info-element.component.scss']
})

export class InfoElementComponent implements OnInit {
  public currentElement: any;
  public deleteId?: any
  public objElement: any = {};
  public items = ['Info', 'Change element'];
  public expandedIndex = 0;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private transfer: TransferService,
  ) { }

  ngOnInit(): void {
    this.transfer.selectedElement$.pipe(takeUntil(this.unsubscribeAll))
    .subscribe(res => this.currentElement = res)
  };

  onSelect(key: any, event: Event): void {
    this.objElement = this.currentElement.style
    this.objElement[key] = (<HTMLInputElement>event.target).value;
  }

  deleteElem(el: Element) {
    this.transfer.deleteElementId(el.id)
    this.currentElement = null
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}

