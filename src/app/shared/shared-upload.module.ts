import { NgModule } from '@angular/core';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { UploadFileDialogComponent } from '../admin-panel/upload-file-dialog/upload-file-dialog.component';

@NgModule({
  declarations: [UploadFileDialogComponent],
  imports: [
    FilePickerModule
  ],
  exports: [
    UploadFileDialogComponent,
    FilePickerModule
  ],
  entryComponents: [UploadFileDialogComponent]
}
)
export class SharedUploadModule {

}
