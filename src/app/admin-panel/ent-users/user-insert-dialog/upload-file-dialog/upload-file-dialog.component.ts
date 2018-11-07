import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'upload-file-dialog',
  templateUrl: './upload-file-dialog.component.html',
  styleUrls: ['./upload-file-dialog.component.scss']
})
export class UploadFileDialogComponent {
  @Output() uploaded = new EventEmitter<string>();
  constructor( public dialogRef: MatDialogRef<UploadFileDialogComponent>) { }

  onUploaded(res) {
    console.log(res);
    this.dialogRef.close(res);
  }

}
