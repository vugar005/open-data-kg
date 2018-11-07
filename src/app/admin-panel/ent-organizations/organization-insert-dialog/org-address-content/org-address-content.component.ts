import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OrgAddrInsertDialogComponent } from './org-addr-insert-dialog/org-addr-insert-dialog.component';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'org-address-content',
  templateUrl: './org-address-content.component.html',
  styleUrls: ['./org-address-content.component.scss']
})
export class OrgAddressContentComponent {
  @Input() id: string;
  @ViewChild('table') table: NtTableComponent;
  faPlusCircle = faPlusCircle;
  constructor(private dialog: MatDialog) { }
  initDialog(e) {
    console.log('e');
    const ref = this.dialog.open(OrgAddrInsertDialogComponent,
      {data: {insertApi: e, id: this.id}
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(OrgAddrInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }

}
