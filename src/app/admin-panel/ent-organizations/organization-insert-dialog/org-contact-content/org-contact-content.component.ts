import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { OrgContactInsertDialogComponent } from './org-contact-insert-dialog/org-contact-insert-dialog.component';

@Component({
  selector: 'org-contact-content',
  templateUrl: './org-contact-content.component.html',
  styleUrls: ['./org-contact-content.component.scss']
})
export class OrgContactContentComponent {

  @Input() id: string;
  @ViewChild('table') table: NtTableComponent;
  faPlusCircle = faPlusCircle;
  constructor(private dialog: MatDialog) { }
  initDialog(e) {
    console.log('e');
    const ref = this.dialog.open(OrgContactInsertDialogComponent,
      {data: {insertApi: e, id: this.id}
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(OrgContactInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }

}
