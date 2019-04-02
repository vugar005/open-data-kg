import { SharingCommentInsertComponent } from './sharing-comment-insert/sharing-comment-insert.component';
import { Component, ViewChild } from '@angular/core';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

@Component({
  selector: 'app-ent-sharing-comments',
  templateUrl: './ent-sharing-comments.component.html',
  styleUrls: ['./ent-sharing-comments.component.scss']
})
export class EntSharingCommentsComponent  {

  config: ApiConfig = {
    getApi: 'api/post/Permission/Sharing/GetSharingCommentList',
    insertApi: 'api/post/Permission/Sharing/InsertNewSharingComment',
    updateApi: 'api/post/Permission/Sharing/UpdateSharingComment',
    deleteApi: 'api/post/Permission/Sharing/DeleteSharingComment',
    confirmApi: 'api/post/Permission/Sharing/ConfirmSharingComment',
    unConfirmApi: 'api/post/Permission/Sharing/UnconfirmSharingComment'
    // additionalFormData: {
    //   datasetId: '181119404100269028'
    // }
  };
  @ViewChild('table') table: NgxNativeTableComponent;
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, SharingCommentInsertComponent);
   }
}
