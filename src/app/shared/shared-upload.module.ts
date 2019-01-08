import { NgModule } from '@angular/core';
import { UploadFileDialogComponent } from '../admin-panel/ent-users/user-insert-dialog/upload-file-dialog/upload-file-dialog.component';
import { FilePickerModule } from 'ngx-awesome-uploader';

@NgModule({
  exports: [
    UploadFileDialogComponent,
    FilePickerModule
  ],
  imports: [
    FilePickerModule
  ],
  declarations: [UploadFileDialogComponent],
  entryComponents: [UploadFileDialogComponent]
}
)
export class SharedUploadModule {

}
