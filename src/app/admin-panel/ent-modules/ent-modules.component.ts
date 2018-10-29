import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { ModulesInsertDialogComponent } from './modules-insert-dialog/modules-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';

@Component({
  selector: 'app-ent-modules',
  templateUrl: './ent-modules.component.html',
  styleUrls: ['./ent-modules.component.scss']
})
export class EntModulesComponent implements OnInit {

  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
  }
  initDialog(e) {
    console.log('e');
    const ref = this.dialog.open(ModulesInsertDialogComponent,
      {data: {insertApi: e}
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(ModulesInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }

}
