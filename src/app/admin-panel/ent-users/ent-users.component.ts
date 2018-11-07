import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';

@Component({
  selector: 'app-ent-users',
  templateUrl: './ent-users.component.html',
  styleUrls: ['./ent-users.component.scss']
})
export class EntUsersComponent  {
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(e) {
    console.log('e');
    const ref = this.dialog.open(UserInsertDialogComponent,
      {data: {insertApi: e}, disableClose: true
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(UserInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }
}
