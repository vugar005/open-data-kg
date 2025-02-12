import { SharedService } from './../../../shared/shared.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { getFormErrors } from 'src/app/shared/table-utils/form-utils/form-utils.methods';

import { addAttachFileToolbar } from 'src/app/shared/shared-methods';
import { FileManagerDialogComponent } from '../../file-manager-dialog/file-manager-dialog.component';
import { UploadFileDialogComponent } from '../../upload-file-dialog/upload-file-dialog.component';

@Component({
  selector: 'app-announcement-insert',
  templateUrl: './announcement-insert.component.html',
  styleUrls: ['./announcement-insert.component.scss']
})
export class AnnouncementInsertComponent {
  cats$: Observable<any>;
  imgId: string;
  maxDate = new Date();
  startDate = new Date();
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AnnouncementInsertComponent>,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {
    this.cats$ = this.sharedService.getTypes('1000008');

  }
 getErrors(str) {
    return getFormErrors(this.ntForm, str);
  }
    onUpload() {
      const dialogRef = this.dialog.open(UploadFileDialogComponent);
      dialogRef.afterClosed().subscribe(res => {
        console.log(res);
        if (res) { this.imgId = res; }
        dialogRef.close();
      });
    }
    onEditorInit() {
      return addAttachFileToolbar(this.dialog, FileManagerDialogComponent);
    }

}
