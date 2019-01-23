import { CustomFilePickerAdapter } from './../../shared/adapters/custom-file-picker.adapter';
import { FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'upload-file-dialog',
  templateUrl: './upload-file-dialog.component.html',
  styleUrls: ['./upload-file-dialog.component.scss']
})
export class UploadFileDialogComponent implements OnInit {
  @Output() uploaded = new EventEmitter<string>();
  adapter = new CustomFilePickerAdapter(this.http);
  cropperOptions = {
    dragMode: 'crop',
    autoCrop: true,
    movable: true,
    zoomable: true,
    scalable: true,
    autoCropArea: 0.8,
    aspectRatio: 1.25,
    cropBoxResizable: true
  };
  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
               public dialogRef: MatDialogRef<UploadFileDialogComponent>,
               private http: HttpClient) {}
  ngOnInit() {
    console.log(this.data);
    if (this.data && this.data.adapter) {this.adapter = this.data.adapter; }
  }
  onUploaded(res: FilePreviewModel) {
   this.dialogRef.close(res.fileId);
  }
  onValidationError(er) {
    console.log(er);
  }

}
