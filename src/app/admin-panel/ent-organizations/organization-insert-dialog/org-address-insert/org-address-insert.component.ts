import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';

@Component({
  selector: 'app-org-address-insert',
  templateUrl: './org-address-insert.component.html',
  styleUrls: ['./org-address-insert.component.scss']
})
export class OrgAddressInsertComponent  {
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<OrgAddressInsertComponent>,
    public viewRef: ViewContainerRef
  ) {
  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }

}
