import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { CommentInsertDialogComponent } from './comment-insert-dialog/comment-insert-dialog.component';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';

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
    deleteApi: 'api/post/Permission/Comments/DeleteDateastComment',
    confirmApi: 'api/post/Permission/Comments/ConfirmDatasetComment',
    unConfirmApi: 'api/post/Permission/Comments/UnconfirmDatasetComment'
    // additionalFormData: {
    //   datasetId: '181119404100269028'
    // }
  };
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(table, row = null) {
    const ref = this.dialog.open(CommentInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }

}
