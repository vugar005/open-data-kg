import { Component, ViewChild } from '@angular/core';
import { ModulesInsertDialogComponent } from './modules-insert-dialog/modules-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

@Component({
  selector: 'ent-modules',
  templateUrl: './ent-modules.component.html',
  styleUrls: ['./ent-modules.component.scss']
})
export class EntModulesComponent {
  config: ApiConfig = {
    getApi: 'api/post/Permission/Modules/GetModuleList',
    insertApi: 'api/post/Permission/Modules/InsertNewModule',
    updateApi: 'api/post/Permission/Modules/UpdateModule',
    deleteApi: 'api/post/Permission/Modules/DeleteModule'
  };
  @ViewChild('table') table: NgxNativeTableComponent;
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, ModulesInsertDialogComponent);
   }

}
