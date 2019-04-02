import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUtilsService } from './table-utils.service';
import { RemoveConfirmComponent } from './remove-confirm/remove-confirm.component';
import { TableEditButtonComponent } from './table-edit-button/table-edit-button.component';
import { InsertTableDataDirective } from './directives/insert-table-data.directive';
import { UpdateTableDataDirective } from './directives/update-table-data.directive';
import { PatchFormDirective } from './directives/patch-form.directive';
import { MatDialogModule } from '@angular/material';
import { NgxNativeTableModule } from './native-table/native-table.module';

@NgModule({
  declarations: [
    TableEditButtonComponent,
    RemoveConfirmComponent,
    InsertTableDataDirective,
    UpdateTableDataDirective,
    PatchFormDirective
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    NgxNativeTableModule
  ],
  exports: [
    TableEditButtonComponent,
    RemoveConfirmComponent,
    InsertTableDataDirective,
    UpdateTableDataDirective,
    PatchFormDirective,
    NgxNativeTableModule
  ],
  entryComponents: [RemoveConfirmComponent],
  providers: [TableUtilsService]
})
export class TableUtilsModule { }
