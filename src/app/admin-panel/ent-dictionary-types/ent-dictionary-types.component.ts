import { Component, ViewChild } from '@angular/core';
import { DictionaryTypeInsertDialogComponent } from './dictionary-type-insert-dialog/dictionary-type-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, NgxNativeTableComponent, ApiConfig } from 'ngx-native-table';

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
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, DictionaryTypeInsertDialogComponent);
   }

}
