import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';
@Component({
  selector: 'app-applications-insert-dialog',
  templateUrl: './applications-insert-dialog.component.html',
  styleUrls: ['./applications-insert-dialog.component.scss']
})
export class ApplicationsInsertDialogComponent {
  @ViewChild('f') ntForm: NgForm;
  apps$: Observable<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ApplicationsInsertDialogComponent>,
    private sharedService: SharedService
  ) {
    this.apps$ = this.sharedService.getModTypes('api/post/Permission/Applications/GetApplicationList');
  }
  getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }
}
