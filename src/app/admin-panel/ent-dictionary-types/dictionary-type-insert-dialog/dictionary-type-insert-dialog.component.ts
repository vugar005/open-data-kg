import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';

@Component({
  selector: 'app-dictionary-type-insert-dialog',
  templateUrl: './dictionary-type-insert-dialog.component.html',
  styleUrls: ['./dictionary-type-insert-dialog.component.scss']
})
export class DictionaryTypeInsertDialogComponent {

  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DictionaryTypeInsertDialogComponent>,
    public viewRef: ViewContainerRef
  ) {}
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }

}
