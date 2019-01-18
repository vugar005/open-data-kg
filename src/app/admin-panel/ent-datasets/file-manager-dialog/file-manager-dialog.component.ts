import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-manager-dialog',
  templateUrl: './file-manager-dialog.component.html',
  styleUrls: ['./file-manager-dialog.component.scss']
})
export class FileManagerDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FileManagerDialogComponent>) { }

  ngOnInit() {
  }
  onClose() {
    console.log('on close');
    this.dialogRef.close();
  }

}
