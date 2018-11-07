import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { UserRolesInsertDialogComponent } from './user-roles-insert-dialog/user-roles-insert-dialog.component';

@Component({
  selector: 'app-admin-user-roles',
  templateUrl: './admin-user-roles.component.html',
  styleUrls: ['./admin-user-roles.component.scss']
})
export class AdminUserRolesComponent {

  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(e) {
    console.log('e');
    const ref = this.dialog.open(UserRolesInsertDialogComponent,
      {data: {insertApi: e}, disableClose: true
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(UserRolesInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }

}
