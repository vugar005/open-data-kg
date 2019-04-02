import { Component, ViewChild } from '@angular/core';
import { AnnouncementInsertComponent } from './announcement-insert/announcement-insert.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

@Component({
  selector: 'ent-annoucements',
  templateUrl: './ent-annoucements.component.html',
  styleUrls: ['./ent-annoucements.component.scss']
})
export class EntAnnoucementsComponent  {

  config: ApiConfig = {
    getApi: 'api/post/Permission/Sharing/GetAnnouncementList',
    insertApi: 'api/post/Permission/Sharing/InsertNewAnnouncement',
    updateApi: 'api/post/Permission/Sharing/UpdateAnnouncement',
    deleteApi: 'api/post/Permission/Sharing/DeleteAnnouncement',
    confirmApi: 'api/post/Permission/Sharing/ConfirmAnnouncement',
    unConfirmApi: 'api/post/Permission/Sharing/UnconfirmAnnouncement'
  };
  @ViewChild('table') table: NgxNativeTableComponent;
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, AnnouncementInsertComponent);
   }
}
