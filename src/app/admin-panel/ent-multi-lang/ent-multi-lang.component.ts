import { MultiLangInsertComponent } from './multi-lang-insert/multi-lang-insert.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ent-multi-lang',
  templateUrl: './ent-multi-lang.component.html',
  styleUrls: ['./ent-multi-lang.component.scss']
})
export class EntMultiLangComponent  {
  @ViewChild('table') table: NtTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Multilang/GetMultilangList',
    insertApi: 'api/post/Permission/Multilang/InsertNewMultilang',
    updateApi: 'api/post/Permission/Multilang/UpdateMultilang',
    deleteApi: 'api/post/Permission/Multilang/DeleteMultilang'
  };
  constructor(private dialog: MatDialog) {
   }
   initDialog(table, row = null) {
    const ref = this.dialog.open(MultiLangInsertComponent, {
      data: { table: table, row: row || undefined}
    });
  }

}
