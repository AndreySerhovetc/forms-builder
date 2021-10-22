import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InfoElementComponent } from '../info-element/info-element.component';
import { ElementsListComponent } from '../elements-list/elements-list.component';
import { DropFieldComponent } from '../drop-field/drop-field.component';
import { CustomInputComponent } from '../info-element/custom-input/custom-input.component';
import { ConfirmModalComponent } from '../drop-field/confirm-modal/confirm-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    InfoElementComponent,
    ElementsListComponent,
    DropFieldComponent,
    CustomInputComponent,
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    CdkAccordionModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeModule {}
