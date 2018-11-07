import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { DictionariesInsertDialogComponent } from './dictionaries-insert-dialog/dictionaries-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'app-ent-dictionaries',
  templateUrl: './ent-dictionaries.component.html',
  styleUrls: ['./ent-dictionaries.component.scss']
})
export class EntDictionariesComponent {
  @ViewChild('table') table: NtTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Dictionaries/GetDictionaryList',
    insertApi: 'api/post/Permission/Dictionaries/InsertNewDictionary',
    updateApi: 'api/post/Permission/Dictionaries/UpdateDictionary',
    deleteApi: 'api/post/Permission/Dictionaries/DeleteDictionary'
  };
  constructor(private dialog: MatDialog) {
   }
   initDialog(table, row = null) {
    const ref = this.dialog.open(DictionariesInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
}
