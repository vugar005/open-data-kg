import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { OrganizationInsertDialogComponent } from './organization-insert-dialog/organization-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'app-ent-organizations',
  templateUrl: './ent-organizations.component.html',
  styleUrls: ['./ent-organizations.component.scss']
})
export class EntOrganizationsComponent {
  @ViewChild('table') table: NtTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Organizations/GetOrganizationList',
    insertApi: 'api/post/Permission/Organizations/InsertNewOrganization',
    updateApi: 'api/post/Permission/Organizations/UpdateOrganization',
    deleteApi: 'api/post/Permission/Organizations/DeleteOrganization'
  };
  constructor(private dialog: MatDialog) { }
  initDialog(table: NtTableComponent, row = null) {
    const ref = this.dialog.open(OrganizationInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }

}
