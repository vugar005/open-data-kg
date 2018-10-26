import { Component, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ent-operations',
  templateUrl: './ent-operations.component.html',
  styleUrls: ['./ent-operations.component.scss']
})
export class EntOperationsComponent {

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
