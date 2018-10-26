import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ent-applications',
  templateUrl: './ent-applications.component.html',
  styleUrls: ['./ent-applications.component.scss']
})
export class EntApplicationsComponent  {

  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(e) {
    console.log('e');
    // const ref = this.dialog.open(ModulesInsertDialogComponent,
    //   {data: {insertApi: e}
    //  });
  }
  initUpdateDialog(e, url) {
  //  const ref = this.dialog.open(ModulesInsertDialogComponent,
  //    {data: {updateApi: url, row: e}
  //   });
 }

}
