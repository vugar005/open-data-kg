import { Component, ViewChild } from '@angular/core';
import { DictionariesInsertDialogComponent } from './dictionaries-insert-dialog/dictionaries-insert-dialog.component';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

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
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, DictionariesInsertDialogComponent);
   }
}
