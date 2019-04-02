import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsInsertDialogComponent } from './news-insert-dialog/news-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

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
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, NewsInsertDialogComponent);
   }
}
