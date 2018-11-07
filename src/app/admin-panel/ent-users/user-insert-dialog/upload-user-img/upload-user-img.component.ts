import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'upload-user-img',
  templateUrl: './upload-user-img.component.html',
  styleUrls: ['./upload-user-img.component.scss']
})
export class UploadUserImgComponent {
  @Output() uploaded = new EventEmitter<string>();
  constructor( public dialogRef: MatDialogRef<UploadUserImgComponent>) { }

  onUploaded(res) {
    console.log(res);
    this.dialogRef.close(res);
  }

}
