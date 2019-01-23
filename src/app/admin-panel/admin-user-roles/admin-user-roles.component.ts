import { Component, ViewChild } from '@angular/core';
import { UserRolesInsertDialogComponent } from './user-roles-insert-dialog/user-roles-insert-dialog.component';
import { NgxNativeTableComponent, ApiConfig, TableEditerAction } from 'ngx-native-table';
import { SharedAdminService } from '../shared/shared-admin.service';

@Component({
  selector: 'admin-user-roles',
  templateUrl: './admin-user-roles.component.html',
  styleUrls: ['./admin-user-roles.component.scss']
})
export class AdminUserRolesComponent {
  @ViewChild('table') table: NgxNativeTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/UserRoles/GetUserRoleList',
    insertApi: 'api/post/Permission/UserRoles/InsertNewUserRole',
    updateApi: 'api/post/Permission/UserRoles/UpdateUserRole',
    deleteApi: 'api/post/Permission/UserRoles/DeleteUserRole',
    additionalFormData : {
      ownerId: '181109524302827110'
    }
  };
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, UserRolesInsertDialogComponent);
   }

}
