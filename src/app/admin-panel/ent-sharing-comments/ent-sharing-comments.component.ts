import { SharingCommentInsertComponent } from './sharing-comment-insert/sharing-comment-insert.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';

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
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(table, row = null) {
    const ref = this.dialog.open(SharingCommentInsertComponent, {
      data: { table: table, row: row || undefined}
    });
  }
}
