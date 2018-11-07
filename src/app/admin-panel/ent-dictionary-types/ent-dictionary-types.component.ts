import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { DictionaryTypeInsertDialogComponent } from './dictionary-type-insert-dialog/dictionary-type-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'app-ent-dictionary-types',
  templateUrl: './ent-dictionary-types.component.html',
  styleUrls: ['./ent-dictionary-types.component.scss']
})
export class EntDictionaryTypesComponent  {
  @ViewChild('table') table: NtTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/DictionaryTypes/GetDictionaryTypeList',
    insertApi: 'api/post/Permission/DictionaryTypes/InsertNewDictionaryType',
    updateApi: 'api/post/Permission/DictionaryTypes/UpdateDictionaryType',
    deleteApi: 'api/post/Permission/DictionaryTypes/DeleteDictionaryType'
  };
  constructor(private dialog: MatDialog) { }
  initDialog(table, row = null) {
    const ref = this.dialog.open(DictionaryTypeInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }

}
