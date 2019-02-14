import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApplicationsInsertDialogComponent } from '../../ent-applications/applications-insert-dialog/applications-insert-dialog.component';
import { SharedService } from 'src/app/shared/shared.service';
import { NgxFormUtils } from 'ngx-form-utils';
import * as InlineEdtior from '@ckeditor/ckeditor5-build-inline';
import { addAttachFileToolbar } from 'src/app/shared/shared-methods';
import { FileManagerDialogComponent } from '../../file-manager-dialog/file-manager-dialog.component';
import { UploadFileDialogComponent } from '../../upload-file-dialog/upload-file-dialog.component';

@Component({
  selector: 'app-news-insert-dialog',
  templateUrl: './news-insert-dialog.component.html',
  styleUrls: ['./news-insert-dialog.component.scss']
})
export class NewsInsertDialogComponent  {
  cats$: Observable<any>;
  imgId: string;
  maxDate = new Date();
  startDate = new Date();
  public Editor = InlineEdtior;
  editorConfig = {
    toolbar: [ 'heading', '|', 'Bold', 'Italic', 'link',  ]
  };
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ApplicationsInsertDialogComponent>,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {
    this.cats$ = this.sharedService.getTypes('1000008');

  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }
    onEditorInit() {
      return addAttachFileToolbar(this.dialog, FileManagerDialogComponent);
    }
    onUpload() {
      const dialogRef = this.dialog.open(UploadFileDialogComponent);
      dialogRef.afterClosed().subscribe(res => {
        console.log(res);
        if (res) { this.imgId = res; }
        dialogRef.close();
      });
    }
    onRemoveFile(id: string) {
      this.sharedService.removeFile(id).subscribe(res => this.imgId = undefined);
   }
}
