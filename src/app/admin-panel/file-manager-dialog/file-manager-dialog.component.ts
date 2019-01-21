import { MatDialogRef } from '@angular/material';
import { Component, OnInit,  Optional, ApplicationRef } from '@angular/core';
import { imgSrcParser } from 'src/app/shared/shared-methods';
import { FileManagerItem } from '../file-manager/file-manager-item.model';

@Component({
  selector: 'app-file-manager-dialog',
  templateUrl: './file-manager-dialog.component.html',
  styleUrls: ['./file-manager-dialog.component.scss']
})
export class FileManagerDialogComponent implements OnInit {
  constructor(@Optional() public dialogRef: MatDialogRef<FileManagerDialogComponent>,
    private appRef: ApplicationRef) { }

  ngOnInit() {
    /** Calling app change detection because of detection issue */
    setTimeout(() => {
      this.appRef.tick();
    }, 10);
  }
  onSelected(item: FileManagerItem) {
    console.log('clicked');
    this.dialogRef.close(imgSrcParser(item.id));
    this.appRef.tick();
  }
  onCancel() {
   this.dialogRef.close();
   this.appRef.tick();
  }
}
