import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-roles-insert-dialog',
  templateUrl: './user-roles-insert-dialog.component.html',
  styleUrls: ['./user-roles-insert-dialog.component.scss']
})
export class UserRolesInsertDialogComponent {
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserRolesInsertDialogComponent>,
    public viewRef: ViewContainerRef
  ) {}
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }
}
