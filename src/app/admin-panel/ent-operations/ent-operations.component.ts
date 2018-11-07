import { Component, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { OperationsInsertDialogComponent } from './operations-insert-dialog/operations-insert-dialog.component';

@Component({
  selector: 'app-ent-operations',
  templateUrl: './ent-operations.component.html',
  styleUrls: ['./ent-operations.component.scss']
})
export class EntOperationsComponent {

  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(e) {
    const ref = this.dialog.open(OperationsInsertDialogComponent,
      {data: {insertApi: e}, disableClose: true
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(OperationsInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }
}
