import { Component, ViewChild } from '@angular/core';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, NgxNativeTableComponent, ApiConfig } from 'ngx-native-table';

@Component({
  selector: 'ent-users',
  templateUrl: './ent-users.component.html',
  styleUrls: ['./ent-users.component.scss']
})
export class EntUsersComponent  {
  @ViewChild('table') table: NgxNativeTableComponent;
  config = {
    getApi: 'api/post/Permission/Users/GetUserList',
    insertApi: 'api/post/Permission/Users/InsertNewUser',
    updateApi: 'api/post/Permission/Users/UpdateUser',
    deleteApi: 'api/post/Permission/Users/DeleteUser',
    activateApi: 'api/post/Permission/Users/ActiveUser',
    deactivateApi: 'api/post/Permission/Users/DeactiveUser'
  };
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, UserInsertDialogComponent);
   }
}
