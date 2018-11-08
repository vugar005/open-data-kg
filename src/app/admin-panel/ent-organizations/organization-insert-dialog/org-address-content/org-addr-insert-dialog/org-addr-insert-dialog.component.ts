import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';

@Component({
  selector: 'app-org-addr-insert-dialog',
  templateUrl: './org-addr-insert-dialog.component.html',
  styleUrls: ['./org-addr-insert-dialog.component.scss']
})
export class OrgAddrInsertDialogComponent {

  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<OrgAddrInsertDialogComponent>,
    public viewRef: ViewContainerRef
  ) {
    console.log(data);
    console.log(this.data.table.config)
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
