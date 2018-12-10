import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { ApplicationsInsertDialogComponent } from './applications-insert-dialog/applications-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'ent-applications',
  templateUrl: './ent-applications.component.html',
  styleUrls: ['./ent-applications.component.scss']
})
export class EntApplicationsComponent  {
  config: ApiConfig = {
    getApi: 'api/post/Permission/Applications/GetApplicationList',
    insertApi: 'api/post/Permission/Applications/InsertNewApplication',
    updateApi: 'api/post/Permission/Applications/UpdateApplication',
    deleteApi: 'api/post/Permission/Applications/DeleteApplication',
  };
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(table, row = null) {
    const ref = this.dialog.open(ApplicationsInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
}
