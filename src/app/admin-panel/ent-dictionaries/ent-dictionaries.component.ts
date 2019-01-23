import { Component, ViewChild } from '@angular/core';
import { DictionariesInsertDialogComponent } from './dictionaries-insert-dialog/dictionaries-insert-dialog.component';
import { NgxNativeTableComponent, TableEditerAction, ApiConfig } from 'ngx-native-table';
import { SharedAdminService } from '../shared/shared-admin.service';

@Component({
  selector: 'ent-dictionaries',
  templateUrl: './ent-dictionaries.component.html',
  styleUrls: ['./ent-dictionaries.component.scss']
})
export class EntDictionariesComponent {
  @ViewChild('table') table: NgxNativeTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Dictionaries/GetDictionaryList',
    insertApi: 'api/post/Permission/Dictionaries/InsertNewDictionary',
    updateApi: 'api/post/Permission/Dictionaries/UpdateDictionary',
    deleteApi: 'api/post/Permission/Dictionaries/DeleteDictionary'
  };
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, DictionariesInsertDialogComponent);
   }
}
