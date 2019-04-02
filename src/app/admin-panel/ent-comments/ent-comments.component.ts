import { Component, ViewChild } from '@angular/core';
import { CommentInsertDialogComponent } from './comment-insert-dialog/comment-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

@Component({
  selector: 'ent-comments',
  templateUrl: './ent-comments.component.html',
  styleUrls: ['./ent-comments.component.scss']
})
export class EntCommentsComponent {
  config: ApiConfig = {
    getApi: 'api/post/Permission/Comments/GetDatasetCommentList',
    insertApi: 'api/post/Permission/Comments/InsertNewComment',
    updateApi: 'api/post/Permission/Comments/UpdateDatasetComment',
    deleteApi: 'api/post/Permission/Comments/DeleteDatasetComment',
    confirmApi: 'api/post/Permission/Comments/ConfirmDatasetComment',
    unConfirmApi: 'api/post/Permission/Comments/UnconfirmDatasetComment'
    // additionalFormData: {
    //   datasetId: '181119404100269028'
    // }
  };
  @ViewChild('table') table: NgxNativeTableComponent;
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, CommentInsertDialogComponent);
   }

}
