import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsInsertDialogComponent } from './news-insert-dialog/news-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, ApiConfig } from 'ngx-native-table';
import { NgxNativeTableComponent } from 'ngx-native-table';

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
  @ViewChild('table') table: NgxNativeTableComponent;
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, NewsInsertDialogComponent);
   }
}
