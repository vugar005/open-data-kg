import { SharingCommentInsertComponent } from './sharing-comment-insert/sharing-comment-insert.component';
import { Component, ViewChild } from '@angular/core';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, NgxNativeTableComponent, ApiConfig } from 'ngx-native-table';

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
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, SharingCommentInsertComponent);
   }
}
