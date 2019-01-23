import { SharedService } from './../../../shared/shared.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { addAttachFileToolbar } from 'src/app/shared/shared-methods';
import { FileManagerDialogComponent } from '../../file-manager-dialog/file-manager-dialog.component';
import { UploadFileDialogComponent } from '../../upload-file-dialog/upload-file-dialog.component';

@Component({
  selector: 'app-blog-insert',
  templateUrl: './blog-insert.component.html',
  styleUrls: ['./blog-insert.component.scss']
})
export class BlogInsertComponent {
  cats$: Observable<any>;
  maxDate = new Date();
  startDate = new Date();
  imgId: string;
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BlogInsertComponent>,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {
    this.cats$ = this.sharedService.getTypes('1000008');

  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
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
