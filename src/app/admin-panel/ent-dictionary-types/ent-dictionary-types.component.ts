import { Component, ViewChild } from '@angular/core';
import { DictionaryTypeInsertDialogComponent } from './dictionary-type-insert-dialog/dictionary-type-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

@Component({
  selector: 'ent-dictionary-types',
  templateUrl: './ent-dictionary-types.component.html',
  styleUrls: ['./ent-dictionary-types.component.scss']
})
export class EntDictionaryTypesComponent  {
  @ViewChild('table') table: NgxNativeTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/DictionaryTypes/GetDictionaryTypeList',
    insertApi: 'api/post/Permission/DictionaryTypes/InsertNewDictionaryType',
    updateApi: 'api/post/Permission/DictionaryTypes/UpdateDictionaryType',
    deleteApi: 'api/post/Permission/DictionaryTypes/DeleteDictionaryType'
  };
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, DictionaryTypeInsertDialogComponent);
   }

}
