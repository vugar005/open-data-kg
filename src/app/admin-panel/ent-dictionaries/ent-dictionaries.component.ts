import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { DictionariesInsertDialogComponent } from './dictionaries-insert-dialog/dictionaries-insert-dialog.component';

@Component({
  selector: 'app-ent-dictionaries',
  templateUrl: './ent-dictionaries.component.html',
  styleUrls: ['./ent-dictionaries.component.scss']
})
export class EntDictionariesComponent {
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) {
   }
  initDialog(e) {
    console.log('e');
    const ref = this.dialog.open(DictionariesInsertDialogComponent,
      {data: {insertApi: e}
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(DictionariesInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }
}
