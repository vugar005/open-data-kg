import { Component, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';

@Component({
  selector: 'app-multi-lang-insert',
  templateUrl: './multi-lang-insert.component.html',
  styleUrls: ['./multi-lang-insert.component.scss']
})
export class MultiLangInsertComponent {

  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MultiLangInsertComponent>,
    public viewRef: ViewContainerRef,
  ) {
  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }

}
