import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';

@Component({
  selector: 'app-org-contact-insert-dialog',
  templateUrl: './org-contact-insert-dialog.component.html',
  styleUrls: ['./org-contact-insert-dialog.component.scss']
})
export class OrgContactInsertDialogComponent {

  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<OrgContactInsertDialogComponent>,
    public viewRef: ViewContainerRef
  ) {
    console.log(data)
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
