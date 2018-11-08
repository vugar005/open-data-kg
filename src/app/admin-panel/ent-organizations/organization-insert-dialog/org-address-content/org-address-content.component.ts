import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { OrgAddrInsertDialogComponent } from './org-addr-insert-dialog/org-addr-insert-dialog.component';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { ApiConfig } from 'nt-table/lib/api-config.model';

@Component({
  selector: 'org-address-content',
  templateUrl: './org-address-content.component.html',
  styleUrls: ['./org-address-content.component.scss']
})
export class OrgAddressContentComponent implements AfterViewInit {
  @Input() id: string;
  @ViewChild('table') table: NtTableComponent;
  config: any = {};
  faPlusCircle = faPlusCircle;
  constructor(private dialog: MatDialog) { }
  initDialog(table: NtTableComponent, row = null) {
   const ref = this.dialog.open(OrgAddrInsertDialogComponent, {
      data: { table: table, row: row || undefined}
    });
  }
  ngAfterViewInit() {
    this.config = {
      getApi: 'api/post/Permission/Organizations/GetOrganizationAddressList',
      insertApi: 'api/post/Permission/Organizations/InsertNewOrganizationAddress',
      updateApi: 'api/post/Permission/Organizations/UpdateOrganizationAddress',
      deleteApi: 'api/post/Permission/Organizations/DeleteOrganizationAddress',
      additionalFormData : {
        ownerId: this.id
      }
    };
  }

}
