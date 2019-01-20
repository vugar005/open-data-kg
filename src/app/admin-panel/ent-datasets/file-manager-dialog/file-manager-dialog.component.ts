import { MatDialogRef } from '@angular/material';
import { Component, OnInit,  Optional, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-file-manager-dialog',
  templateUrl: './file-manager-dialog.component.html',
  styleUrls: ['./file-manager-dialog.component.scss']
})
export class FileManagerDialogComponent implements OnInit {

  constructor(@Optional() private dialogRef: MatDialogRef<FileManagerDialogComponent>,
    private appRef: ApplicationRef) { }

  ngOnInit() {
  }
  onClose() {
    console.log('on close');
    this.dialogRef.close();
    this.appRef.tick();
  }

}
