import { Component, OnDestroy, OnInit} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Element } from '../Element';
import { ShareServiceService } from '../share-service.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-drop-field',
  templateUrl: './drop-field.component.html',
  styleUrls: ['./drop-field.component.scss']
})

export class DropFieldComponent implements OnInit, OnDestroy {
  public dropElements: Element[] = [];
  public currentElement?: any = {}
  public objStyle?: any = {}
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private share: ShareServiceService,
    private transfer: TransferService,
    ) {}

  ngOnInit(): void {
    this.transfer.selectedElement$.pipe(takeUntil(this.unsubscribeAll))
    .subscribe(res => this.currentElement = res)

  }

  onSelected(element: any): void {
    this.transfer.changeSelectElement(element)
  }

  deleteElement(id: number) {
    this.dropElements = this.dropElements.filter((item: Element) => item.id !== id)
    this.transfer.deleteElementId(id)
   }

  onDrop(event: CdkDragDrop<Element[]>) {
    this.share.drop(event);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}


