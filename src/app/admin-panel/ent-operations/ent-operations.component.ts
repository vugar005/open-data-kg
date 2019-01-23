import { Component, ViewChild } from '@angular/core';
import { OperationsInsertDialogComponent } from './operations-insert-dialog/operations-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, NgxNativeTableComponent, ApiConfig } from 'ngx-native-table';

@Component({
  selector: 'ent-operations',
  templateUrl: './ent-operations.component.html',
  styleUrls: ['./ent-operations.component.scss']
})
export class EntOperationsComponent {
  @ViewChild('table') table: NgxNativeTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Operations/GetOperationList',
    insertApi: 'api/post/Permission/Operations/InsertNewOperation',
    updateApi: 'api/post/Permission/Operations/UpdateOperation',
    deleteApi: 'api/post/Permission/Operations/DeleteOperation'
  };
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, OperationsInsertDialogComponent);
   }
}
