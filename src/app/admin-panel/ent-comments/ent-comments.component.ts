import { Component, ViewChild } from '@angular/core';
import { CommentInsertDialogComponent } from './comment-insert-dialog/comment-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, ApiConfig } from 'ngx-native-table';
import { NgxNativeTableComponent } from 'ngx-native-table';

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
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, CommentInsertDialogComponent);
   }

}
