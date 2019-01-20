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
    /** Calling app change detection because of detection issue */
    setTimeout(() => {
      this.appRef.tick();
    }, 10);
  }
  onClose() {
    /** Getting copyied text that saved via file-manager=> file-item => copy link method */
    const copiedTextElement = (<HTMLTextAreaElement>document.querySelector('[copy-text-value]'));
    let copiedTextValue;
    if (copiedTextElement) { copiedTextValue = copiedTextElement.value; }
    this.dialogRef.close(copiedTextValue);
    this.appRef.tick();
  }

}
