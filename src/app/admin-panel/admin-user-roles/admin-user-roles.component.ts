import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { UserRolesInsertDialogComponent } from './user-roles-insert-dialog/user-roles-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'app-admin-user-roles',
  templateUrl: './admin-user-roles.component.html',
  styleUrls: ['./admin-user-roles.component.scss']
})
export class AdminUserRolesComponent {
  @ViewChild('table') table: NtTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/UserRoles/GetUserRoleList',
    insertApi: 'api/post/Permission/UserRoles/InsertNewUserRole',
    updateApi: 'api/post/Permission/UserRoles/UpdateUserRole',
    deleteApi: 'api/post/Permission/UserRoles/DeleteUserRole',
    additionalFormData : {
      ownerId: '181109524302827110'
    }
  };
  constructor(private dialog: MatDialog) { }
  initDialog(table: NtTableComponent, row = null) {
    const ref = this.dialog.open(UserRolesInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }

}
