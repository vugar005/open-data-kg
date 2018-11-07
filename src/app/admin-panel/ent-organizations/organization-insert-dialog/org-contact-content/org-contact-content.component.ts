import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { OrgContactInsertDialogComponent } from './org-contact-insert-dialog/org-contact-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'org-contact-content',
  templateUrl: './org-contact-content.component.html',
  styleUrls: ['./org-contact-content.component.scss']
})
export class OrgContactContentComponent {
  @Input() id: string;
  @ViewChild('table') table: NtTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Organizations/GetOrganizationContactList',
    insertApi: 'api/post/Permission/Organizations/InsertNewOrganizationContact',
    updateApi: 'api/post/Permission/Organizations/UpdateOrganizationContact',
    deleteApi: 'api/post/Permission/Organizations/DeleteOrganizationContact',
    additionalFormData : {
      ownerId: this.id
    }
  };
  faPlusCircle = faPlusCircle;
  constructor(private dialog: MatDialog) { }
  initDialog(table: NtTableComponent, row = null) {
    const ref  = this.dialog.open(OrgContactInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }

}
