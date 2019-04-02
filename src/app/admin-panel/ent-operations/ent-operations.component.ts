import { Component, ViewChild } from '@angular/core';
import { OperationsInsertDialogComponent } from './operations-insert-dialog/operations-insert-dialog.component';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

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
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, OperationsInsertDialogComponent);
   }
}
