import { HttpClient } from '@angular/common/http';
import { CustomFilePickerAdapter } from './../../../../shared/adapters/custom-file-picker.adapter';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'upload-file-dialog',
  templateUrl: './upload-file-dialog.component.html',
  styleUrls: ['./upload-file-dialog.component.scss']
})
export class UploadFileDialogComponent {
  @Output() uploaded = new EventEmitter<string>();
  adapter = new CustomFilePickerAdapter(this.http);
  constructor( public dialogRef: MatDialogRef<UploadFileDialogComponent>, private http: HttpClient) { }

  onUploaded(res) {
    console.log(res);
    this.dialogRef.close(res);
  }
  onValidationError(er) {
    console.log(er)
  }

}
