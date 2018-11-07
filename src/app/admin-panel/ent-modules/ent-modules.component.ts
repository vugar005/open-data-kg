import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { ModulesInsertDialogComponent } from './modules-insert-dialog/modules-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'app-ent-modules',
  templateUrl: './ent-modules.component.html',
  styleUrls: ['./ent-modules.component.scss']
})
export class EntModulesComponent implements OnInit {
  config: ApiConfig = {
    getApi: 'api/post/Permission/Modules/GetModuleList',
    insertApi: 'api/post/Permission/Modules/InsertNewModule',
    updateApi: 'api/post/Permission/Modules/UpdateModule',
    deleteApi: 'api/post/Permission/Modules/DeleteModule'
  };
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
  }
  initDialog(table: NtTableComponent, row = null) {
    const ref = this.dialog.open(ModulesInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }

}
