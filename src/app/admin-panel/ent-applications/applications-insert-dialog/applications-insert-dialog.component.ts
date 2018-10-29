import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import {NgxFormUtils} from 'ngx-form-utils';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-applications-insert-dialog',
  templateUrl: './applications-insert-dialog.component.html',
  styleUrls: ['./applications-insert-dialog.component.scss']
})
export class ApplicationsInsertDialogComponent {

  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ApplicationsInsertDialogComponent>,
    public viewRef: ViewContainerRef
  ) {}
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
}
