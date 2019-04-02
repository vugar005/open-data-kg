import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { SharedService } from 'src/app/shared/shared.service';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';

@Component({
  selector: 'comment-insert-dialog',
  templateUrl: './comment-insert-dialog.component.html',
  styleUrls: ['./comment-insert-dialog.component.scss']
})
export class CommentInsertDialogComponent {
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CommentInsertDialogComponent>,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {
  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }

}
