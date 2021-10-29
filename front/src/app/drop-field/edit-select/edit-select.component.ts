import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-select',
  templateUrl: './edit-select.component.html',
  styleUrls: ['./edit-select.component.scss'],
})
export class EditSelectComponent {
  constructor(public dialogRef: MatDialogRef<EditSelectComponent>) {}
}
