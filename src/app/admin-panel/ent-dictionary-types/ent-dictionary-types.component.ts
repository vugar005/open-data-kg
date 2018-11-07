import { Component, OnInit, ViewChild } from '@angular/core';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';
import { DictionaryTypeInsertDialogComponent } from './dictionary-type-insert-dialog/dictionary-type-insert-dialog.component';

@Component({
  selector: 'app-ent-dictionary-types',
  templateUrl: './ent-dictionary-types.component.html',
  styleUrls: ['./ent-dictionary-types.component.scss']
})
export class EntDictionaryTypesComponent  {

  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) { }
  initDialog(e) {
    console.log('e');
    const ref = this.dialog.open(DictionaryTypeInsertDialogComponent,
      {data: {insertApi: e}, disableClose: true
     });
  }
  initUpdateDialog(e, url) {
   const ref = this.dialog.open(DictionaryTypeInsertDialogComponent,
     {data: {updateApi: url, row: e}
    });
 }

}
