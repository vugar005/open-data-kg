import { Component, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { OperationsInsertDialogComponent } from './operations-insert-dialog/operations-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'ent-operations',
  templateUrl: './ent-operations.component.html',
  styleUrls: ['./ent-operations.component.scss']
})
export class EntOperationsComponent {
  @ViewChild('table') table: NtTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Operations/GetOperationList',
    insertApi: 'api/post/Permission/Operations/InsertNewOperation',
    updateApi: 'api/post/Permission/Operations/UpdateOperation',
    deleteApi: 'api/post/Permission/Operations/DeleteOperation'
  };
  constructor(private dialog: MatDialog) { }
  initDialog(table: NtTableComponent, row = null) {
    const ref = this.dialog.open(OperationsInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
}
