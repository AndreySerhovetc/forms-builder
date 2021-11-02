import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Element } from '../shared/interfaces/element';
import { ShareService } from '../shared/services/shared-service/share.service';
import { TransferService } from '../shared/services/transfer-service/transfer.service';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { DropFieldService } from './drop-field.service';
import { EditSelectComponent } from './edit-select/edit-select.component';

@Component({
  selector: 'app-drop-field',
  templateUrl: './drop-field.component.html',
  styleUrls: ['./drop-field.component.scss'],
  providers: [DropFieldService],
})
export class DropFieldComponent implements OnInit, OnDestroy {
  public dropElements: Element[] = [];
  public currentElement?: Element;
  public deleteId?: number = 0;
  public dialogRef?: MatDialogRef<ConfirmModalComponent>;
  public dialogSelectRef?: MatDialogRef<EditSelectComponent>;
  private destroyAll$: Subject<any> = new Subject<any>();

  constructor(
    private share: ShareService,
    private transfer: TransferService,
    @Optional() private dialog: MatDialog,
    private dropService: DropFieldService,
  ) {}

  ngOnInit(): void {
    this.transfer.selectedElement$
      .pipe(takeUntil(this.destroyAll$))
      .subscribe((res) => (this.currentElement = res));
  }

  onSelected(element: Element): void {
    this.transfer.changeSelectElement(element);
    this.deleteId = element.id;
  }

  deleteElement(id: number) {
    this.dropElements = this.dropService.filterDropList(this.dropElements, id);
  }

  onDrop(event: CdkDragDrop<Element[]>): void {
    this.share.drop(event);
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(ConfirmModalComponent);
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result && this.deleteId) {
        this.deleteElement(this.deleteId);
        this.transfer.deleteElementId(this.deleteId);
      }
    });
  }

  editSelectOption(): void {
    this.dialogSelectRef = this.dialog.open(EditSelectComponent);
    this.dialogSelectRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnDestroy(): void {
    this.destroyAll$.next();
    this.destroyAll$.complete();
  }
}
