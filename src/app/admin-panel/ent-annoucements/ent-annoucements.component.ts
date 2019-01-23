import { Component, ViewChild } from '@angular/core';
import { AnnouncementInsertComponent } from './announcement-insert/announcement-insert.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, ApiConfig } from 'ngx-native-table';
import { NgxNativeTableComponent } from 'ngx-native-table';

@Component({
  selector: 'app-ent-annoucements',
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
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, AnnouncementInsertComponent);
   }
}
