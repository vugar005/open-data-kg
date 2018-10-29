import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntOperationsComponent } from './ent-operations.component';
import { EntOperationsRoutes } from './ent-operations.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { OperationsInsertDialogComponent } from './operations-insert-dialog/operations-insert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    EntOperationsRoutes,
    SharedAdminModule
  ],
  declarations: [EntOperationsComponent, OperationsInsertDialogComponent],
  entryComponents: [OperationsInsertDialogComponent]
})
export class EntOperationsModule { }
