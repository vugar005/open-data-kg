import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { AnnouncementInsertComponent } from './announcement-insert/announcement-insert.component';

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
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) {}
  initDialog(table, row = null) {
    const ref = this.dialog.open(AnnouncementInsertComponent, {
      data: { table: table, row: row || undefined}
    });
  }

}
