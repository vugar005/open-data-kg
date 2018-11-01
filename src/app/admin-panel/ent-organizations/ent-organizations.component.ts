import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { OrganizationInsertDialogComponent } from './organization-insert-dialog/organization-insert-dialog.component';

@Component({
  selector: 'app-ent-organizations',
  templateUrl: './ent-organizations.component.html',
  styleUrls: ['./ent-organizations.component.scss']
})
export class EntOrganizationsComponent {
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(e) {
    console.log('e');
    const ref = this.dialog.open(OrganizationInsertDialogComponent,
      {data: {insertApi: e}
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(OrganizationInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }

}
