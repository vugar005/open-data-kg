import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { SharedService } from 'src/app/shared/shared.service';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';

@Component({
  selector: 'sharing-comment-insert',
  templateUrl: './sharing-comment-insert.component.html',
  styleUrls: ['./sharing-comment-insert.component.scss']
})
export class SharingCommentInsertComponent {
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SharingCommentInsertComponent>,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {
  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }

}
