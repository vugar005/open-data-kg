import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { SharedService } from 'src/app/shared/shared.service';
import { NgxFormUtils } from 'ngx-form-utils';

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
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
