import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Element } from '../Element';
import { ShareServiceService } from '../share-service.service';
import { TransferService } from '../transfer.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-drop-field',
  templateUrl: './drop-field.component.html',
  styleUrls: ['./drop-field.component.scss'],
})
export class DropFieldComponent implements OnInit, OnDestroy {
  public dropElements: Element[] = [];
  public currentElement?: any = {};
  public objStyle?: any = {};
  private unsubscribeAll: Subject<any> = new Subject<any>();
  public deleteId?: any;
  public dialogRef?: MatDialogRef<ConfirmModalComponent>;

  constructor(
    private share: ShareServiceService,
    private transfer: TransferService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.transfer.selectedElement$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res) => (this.currentElement = res));
  }

  onSelected(element: any): void {
    this.transfer.changeSelectElement(element);
    this.deleteId = element.id;
  }

  deleteElement(id: number) {
    this.dropElements = this.dropElements.filter(
      (item: Element) => item.id !== id
    );
  }

  onDrop(event: CdkDragDrop<Element[]>) {
    this.share.drop(event);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(ConfirmModalComponent);
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteElement(this.deleteId);
        this.transfer.deleteElementId(this.deleteId);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
