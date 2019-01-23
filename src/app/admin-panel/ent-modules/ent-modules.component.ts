import { Component, ViewChild } from '@angular/core';
import { ModulesInsertDialogComponent } from './modules-insert-dialog/modules-insert-dialog.component';
import { NgxNativeTableComponent, TableEditerAction, ApiConfig } from 'ngx-native-table';
import { SharedAdminService } from '../shared/shared-admin.service';

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
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, ModulesInsertDialogComponent);
   }

}
