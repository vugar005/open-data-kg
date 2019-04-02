import { Component, ViewChild } from '@angular/core';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

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
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, UserInsertDialogComponent);
   }
}
