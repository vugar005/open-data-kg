import { Component, ViewChild } from '@angular/core';
import { UserRolesInsertDialogComponent } from './user-roles-insert-dialog/user-roles-insert-dialog.component';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

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
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, UserRolesInsertDialogComponent);
   }

}
