import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { NewsInsertDialogComponent } from './news-insert-dialog/news-insert-dialog.component';

@Component({
  selector: 'app-ent-news',
  templateUrl: './ent-news.component.html',
  styleUrls: ['./ent-news.component.scss']
})
export class EntNewsComponent  {

  config: ApiConfig = {
    getApi: 'api/post/Permission/Sharing/GetNewsList',
    insertApi: 'api/post/Permission/Sharing/InsertNewNews',
    updateApi: 'api/post/Permission/Sharing/UpdateNews',
    deleteApi: 'api/post/Permission/Sharing/DeleteNews',
    confirmApi: 'api/post/Permission/Sharing/ConfirmNews',
    unConfirmApi: 'api/post/Permission/Sharing/UnconfirmNews'
  };
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) {}
  initDialog(table, row = null) {
    const ref = this.dialog.open(NewsInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
}
