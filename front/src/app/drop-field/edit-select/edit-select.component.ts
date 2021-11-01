import { Component, OnInit, OnDestroy, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransferService } from 'src/app/shared/services/transfer-service/transfer.service';
import { Element } from 'src/app/shared/interfaces/element';

@Component({
  selector: 'app-edit-select',
  templateUrl: './edit-select.component.html',
  styleUrls: ['./edit-select.component.scss'],
})
export class EditSelectComponent implements OnInit, OnDestroy {
  public select!: Partial<Element>;
  public addOptionForm!: FormGroup;
  // public value: string = '';
  // public label: string = '';
  private destroyAll: Subject<any> = new Subject<any>();

  constructor(
    @Optional() public dialogRef: MatDialogRef<EditSelectComponent>,
    private transfer: TransferService,
  ) {}
 

  ngOnInit(): void {
    this.transfer.selectedElement$
      .pipe(takeUntil(this.destroyAll))
      .subscribe(res => this.select = res);

    this.addOptionForm = new FormGroup({
      label: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.addOptionForm.valid) {
      const formData = { ...this.addOptionForm.value };
      console.log(formData);
      
    }
  }
  
  ngOnDestroy(): void {
    this.destroyAll.next();
    this.destroyAll.complete();
  }
}
