import { FileManagerComponent } from './file-manager.component';
import { ImgSrcPipeModule } from './../../shared/pipes/img-src-pipe.module';
import { MatDialogModule } from '@angular/material';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FileItemComponent } from './file-list/file-item/file-item.component';
import { FileListComponent } from './file-list/file-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRbacModule } from 'src/app/shared/shared-rbac.module';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    SharedRbacModule,
    SharedTranslateModule,
    MatDialogModule,
    ImgSrcPipeModule
  ],
  declarations: [
    FileManagerComponent,
    FileListComponent,
    FileItemComponent
  ],
  exports: [FileManagerComponent],
  entryComponents: [FileManagerComponent]
})
export class FileManagerModule { }
