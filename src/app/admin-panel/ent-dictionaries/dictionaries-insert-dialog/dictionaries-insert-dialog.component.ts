import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';

@Component({
  selector: 'app-dictionaries-insert-dialog',
  templateUrl: './dictionaries-insert-dialog.component.html',
  styleUrls: ['./dictionaries-insert-dialog.component.scss']
})
export class DictionariesInsertDialogComponent  {

  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DictionariesInsertDialogComponent>,
    public viewRef: ViewContainerRef
  ) {}
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
}
